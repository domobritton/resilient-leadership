import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import {
  Wrapper,
  InnerWrapper,
  HeroTitleBox,
  HeroTitle,
  Section,
  FlexRow,
  Column,
  leftColumn,
  rightColumn,
  Heading,
  Title,
  Paragraph,
  List,
  ListItem,
  linkStyle,
} from '../components/styles';

export const FeedbackPageTemplate = ({
  title,
  image,
  heading,
  audience,
  objectives,
  summary,
  processTitle,
  process,
  outcomesTitle,
  outcomes,
}) => {
  return (
    <>
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `center center`,
          backgroundAttachment: `fixed`,
          height: 500,
        }}
      >
        <HeroTitleBox>
          <HeroTitle>{title}</HeroTitle>
        </HeroTitleBox>
      </div>
      <Wrapper>
        <InnerWrapper>
          <Section>
            <FlexRow>
              <Column css={leftColumn}>
                <Heading>{heading}</Heading>
                <p>
                  <b>Audience</b>
                </p>
                <p>{audience}</p>
                <p>
                  <b>Objectives</b>
                </p>
                <p>{objectives}</p>
              </Column>
              <Column css={rightColumn}>
                <p>{summary}</p>
                <Title>{processTitle}</Title>
                <Paragraph>{process}</Paragraph>
                <Title>{outcomesTitle}</Title>
                <List>
                  {outcomes.map(({ text }, idx) => (
                    <ListItem key={idx}>{text}</ListItem>
                  ))}
                </List>
              </Column>
            </FlexRow>
            <Link to='/contact-us' css={linkStyle}>
              Get in touch
            </Link>
          </Section>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

FeedbackPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  audience: PropTypes.string,
  objectives: PropTypes.string,
  summary: PropTypes.string,
  processTitle: PropTypes.string,
  process: PropTypes.string,
  outcomesTitle: PropTypes.string,
  outcomes: PropTypes.array,
};

const FeedbackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeedbackPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        audience={frontmatter.audience}
        objectives={frontmatter.objectives}
        summary={frontmatter.summary}
        processTitle={frontmatter.processTitle}
        process={frontmatter.process}
        outcomesTitle={frontmatter.outcomesTitle}
        outcomes={frontmatter.outcomes}
      />
    </Layout>
  );
};

FeedbackPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedbackPage;

export const feedbackPageQuery = graphql`
  query FeedbackPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        audience
        objectives
        summary
        processTitle
        process
        outcomesTitle
        outcomes {
          text
        }
      }
    }
  }
`;

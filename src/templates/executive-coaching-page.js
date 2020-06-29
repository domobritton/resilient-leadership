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

export const ExecutiveCoachingPageTemplate = ({
  title,
  image,
  heading,
  audience,
  summary1,
  summary2,
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
              </Column>
              <Column css={rightColumn}>
                <p>{summary1}</p>
                <p>{summary2}</p>
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
            <Link to='/contact' css={linkStyle}>
              Get in touch
            </Link>
          </Section>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

ExecutiveCoachingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  audience: PropTypes.string,
  summary1: PropTypes.string,
  summary2: PropTypes.string,
  processTitle: PropTypes.string,
  process: PropTypes.string,
  outcomesTitle: PropTypes.string,
  outcomes: PropTypes.array,
};

const ExecutiveCoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ExecutiveCoachingPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        audience={frontmatter.audience}
        summary1={frontmatter.summary1}
        summary2={frontmatter.summary2}
        processTitle={frontmatter.processTitle}
        process={frontmatter.process}
        outcomesTitle={frontmatter.outcomesTitle}
        outcomes={frontmatter.outcomes}
      />
    </Layout>
  );
};

ExecutiveCoachingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExecutiveCoachingPage;

export const executiveCoachingPageQuery = graphql`
  query ExecutiveCoachingPage($id: String!) {
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
        summary1
        summary2
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

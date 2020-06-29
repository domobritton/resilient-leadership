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

export const TeamCoachingPageTemplate = ({
  title,
  image,
  heading,
  audience,
  summary1,
  summary2,
  processTitle,
  processBold,
  process1,
  process2,
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
                <p>
                  <b>{processBold}:</b>
                </p>
                <Paragraph>{process1}</Paragraph>
                <Paragraph>{process2}</Paragraph>
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

TeamCoachingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  audience: PropTypes.string,
  summary1: PropTypes.string,
  summary2: PropTypes.string,
  processTitle: PropTypes.string,
  processBold: PropTypes.string,
  process1: PropTypes.string,
  process2: PropTypes.string,
  outcomesTitle: PropTypes.string,
  outcomes: PropTypes.array,
};

const TeamCoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeamCoachingPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        audience={frontmatter.audience}
        summary1={frontmatter.summary1}
        summary2={frontmatter.summary2}
        processTitle={frontmatter.processTitle}
        processBold={frontmatter.processBold}
        process1={frontmatter.process1}
        process2={frontmatter.process2}
        outcomesTitle={frontmatter.outcomesTitle}
        outcomes={frontmatter.outcomes}
      />
    </Layout>
  );
};

TeamCoachingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeamCoachingPage;

export const teamCoachingPageQuery = graphql`
  query TeamCoachingPage($id: String!) {
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
        processBold
        process1
        process2
        outcomesTitle
        outcomes {
          text
        }
      }
    }
  }
`;

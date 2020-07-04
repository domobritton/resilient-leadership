import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
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
  linkStyle,
} from '../components/styles';

export const SurveysAssessmentsTemplate = ({
  title,
  image,
  heading1,
  heading2,
  heading3,
  audience,
  objectives,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

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
                <Heading>
                  {heading1}
                  {heading2 && (
                    <>
                      <br />
                      {heading2}
                    </>
                  )}
                  {heading3 && (
                    <>
                      <br />
                      {heading3}
                    </>
                  )}
                </Heading>
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
                <PageContent className='content' content={content} />
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

SurveysAssessmentsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  audience: PropTypes.string,
  objectives: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SurveysAssessments = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SurveysAssessmentsTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
        heading1={post.frontmatter.heading1}
        heading2={post.frontmatter.heading2}
        heading3={post.frontmatter.heading3}
        audience={post.frontmatter.audience}
        objectives={post.frontmatter.objectives}
      />
    </Layout>
  );
};

SurveysAssessments.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SurveysAssessments;

export const surveysAssessmentsQuery = graphql`
  query SurveysAssessments($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading1
        heading2
        heading3
        audience
        objectives
      }
    }
  }
`;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import {
  Wrapper,
  InnerWrapper,
  Section,
  FlexWithDirection,
  Column,
  leftColumn,
  rightColumn,
  Heading,
  linkStyle,
  Title,
  Paragraph,
} from '../components/styles';
import Hero from '../components/Hero';

export const SurveysAssessmentsTemplate = ({
  title,
  image,
  heading1,
  heading2,
  heading3,
  audience,
  objectives,
  overview,
  content,
}) => {
  return (
    <Wrapper>
      <Hero image={image} title={title} alt={title} />
      <Section>
        <InnerWrapper>
          <FlexWithDirection>
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
              <>
                {overview.map(({ bold, text }, idx) => (
                  <Fragment key={idx}>
                    <Paragraph>
                      <b>{bold}: </b>
                      {text}
                    </Paragraph>
                  </Fragment>
                ))}
                {content.map(({ title, paragraphs }, idx) => (
                  <Fragment key={idx}>
                    <Title>{title}</Title>
                    {paragraphs.map(({ bold, text }, idx) => (
                      <Fragment key={idx}>
                        <Paragraph>
                          <b>{bold}: </b>
                          {text}
                        </Paragraph>
                      </Fragment>
                    ))}
                  </Fragment>
                ))}
              </>
            </Column>
          </FlexWithDirection>
          <Link to='/contact' css={linkStyle}>
            Get in touch
          </Link>
        </InnerWrapper>
      </Section>
    </Wrapper>
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
  overview: PropTypes.array,
  content: PropTypes.array,
};

const SurveysAssessments = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <SurveysAssessmentsTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        heading1={post.frontmatter.heading1}
        heading2={post.frontmatter.heading2}
        heading3={post.frontmatter.heading3}
        audience={post.frontmatter.audience}
        objectives={post.frontmatter.objectives}
        overview={post.frontmatter.overview}
        content={post.frontmatter.content}
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
        overview {
          bold
          text
        }
        content {
          title
          paragraphs {
            bold
            text
          }
        }
      }
    }
  }
`;

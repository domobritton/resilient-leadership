import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { css } from '@emotion/react';
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

const SurveysAssessmentsTemplate = ({
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
      <Section
        css={css`
          background-color: #f9f6ef;
        `}
      >
        <InnerWrapper>
          <FlexWithDirection>
            <Column css={leftColumn}>
              <Heading
                css={css`
                  @media (min-width: 650px) {
                    ${heading2 && 'margin-bottom: 0;'}
                  }
                `}
              >
                {heading1}
              </Heading>
              {heading2 && (
                <Heading
                  css={css`
                    @media (min-width: 650px) {
                      ${heading3 && 'margin-bottom: 0;'}
                    }
                  `}
                >
                  {heading2}
                </Heading>
              )}
              {heading3 && <Heading>{heading3}</Heading>}
              <p
                css={css`
                  margin-bottom: 1.5rem;
                `}
              >
                <b>Audience</b>
              </p>
              <p
                css={css`
                  margin-bottom: 1.5rem;
                `}
              >
                {audience}
              </p>
              <p
                css={css`
                  margin-bottom: 1.5rem;
                `}
              >
                <b>Objectives</b>
              </p>
              <p
                css={css`
                  margin-bottom: 1.5rem;
                `}
              >
                {objectives}
              </p>
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
              <Link to='/contact' css={linkStyle}>
                Get in touch
              </Link>
            </Column>
          </FlexWithDirection>
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
              ...GatsbyImageSharpFluid_withWebp
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

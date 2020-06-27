import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

const Wrapper = styled.main``;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const FlexRow = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const leftColumn = css`
  color: #a6a6a6;
  flex: 1;
`;

const rightColumn = css`
  padding-left: 1.25rem;
  flex: 2;
`;

const Heading = styled.h2`
  font-size: 2em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
`;

const linkStyle = css`
  padding: 0.65rem;
  background-color: #fba100;
  color: #ffffff;
  font-size: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 12rem;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background-color: #ffb42f;
    color: #ffffff;
  }
`;

export const SurveysAssessmentsTemplate = ({
  title,
  image,
  heading,
  audience,
  objectives,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;
  console.log(objectives);
  return (
    <>
      <div
        className='full-width-image margin-top-0'
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `left bottom`,
          backgroundAttachment: `fixed`,
          height: 500,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
            style={{
              boxShadow:
                'rgb(251,161,0) 0.5rem 0px 0px, rgb(251,161,0) -0.5rem 0px 0px',
              backgroundColor: 'rgb(251,161,0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
            }}
          >
            {title}
          </h1>
        </div>
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
                <PageContent className='content' content={content} />
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

SurveysAssessmentsTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
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
        heading={post.frontmatter.heading}
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
        heading
        audience
        objectives
      }
    }
  }
`;

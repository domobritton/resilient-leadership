import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

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

const Title = styled.h3`
  font-size: 1.75em;
  font-weight: 700;
  color: #65737d;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  margin-left: 1.25rem;
  list-style-type: circle;
`;

const ListItem = styled.li`
  font-size: 1.125em;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
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

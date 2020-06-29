import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Service from '../components/Service';

const FeedbackPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Service
        title={frontmatter.title}
        image={frontmatter.image}
        heading={frontmatter.heading}
        audience={frontmatter.audience}
        objectives={frontmatter.objectives}
        summary1={frontmatter.summary}
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

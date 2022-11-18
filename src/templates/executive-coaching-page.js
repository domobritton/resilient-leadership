import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Service from '../components/Service';

const ExecutiveCoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Service
        title={frontmatter.title}
        image={frontmatter.image}
        heading1={frontmatter.heading1}
        audience={frontmatter.audience}
        summary1={frontmatter.summary1}
        summary2={frontmatter.summary2}
        processTitle={frontmatter.processTitle}
        process1={frontmatter.process1}
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
            gatsbyImageData(
              width: 2048
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
        heading1
        audience
        summary1
        summary2
        processTitle
        process1
        outcomesTitle
        outcomes {
          text
        }
      }
    }
  }
`;

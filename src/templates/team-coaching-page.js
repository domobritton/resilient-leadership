import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Service from '../components/Service';

const TeamCoachingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Service
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

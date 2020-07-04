import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Service from '../components/Service';

const OrganizationDevelopmentPage = ({ data }) => {
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

OrganizationDevelopmentPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default OrganizationDevelopmentPage;

export const organizationDevelopmentPageQuery = graphql`
  query OrganizationDevelopmentPage($id: String!) {
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

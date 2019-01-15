import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

class DinnerClub extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Dinner Club"
          keywords={[`work`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Hey, I'm David</h1>
        <p>
          I am a software engineer currently at{' '}
          <a href="https://quartermaster.com">Quartermaster</a>.
        </p>
        <p>
          I graduated <a href="https://mcgill.ca">McGill University</a> with a
          degree in Honours Biochemistry. I had initially planned on pursuing
          medicine - but I found that my passions lie with software.
        </p>
      </Layout>
    );
  }
}

export default DinnerClub;

// export const dinnerPhotoQuery = graphql`
//   query dinnerPhotoQuery {
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { collection: { eq: "projects" } }
//     ) {
//       edges {
//         node {
//           collection
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM, YYYY")
//             title
//             tags
//           }
//         }
//       }
//     }
//   }
// `;

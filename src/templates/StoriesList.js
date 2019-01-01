import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import StoriesNavigation from '../components/StoriesNavigation';
import StoriesPreview from '../components/StoriesPreview';

export default class StoriesList extends React.Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout>
        {posts.map(({ node }) => {
          return <StoriesPreview post={node} />;
        })}
        <StoriesNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export const storiesListQuery = graphql`
  query storiesListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

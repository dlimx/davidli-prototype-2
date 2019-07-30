import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import BlogNavigation from '../components/BlogNavigation';
import BlogPreview from '../components/BlogPreview';

import profile from '../../content/assets/profile-pic.jpg';

export default class BlogList extends React.Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout
        right={
          <img
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        }
      >
        {posts.map(({ node }) => (
          <BlogPreview post={node} key={node.fields.slug} />
        ))}
        <BlogNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { collection: { eq: "posts" } }
    ) {
      edges {
        node {
          collection
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;

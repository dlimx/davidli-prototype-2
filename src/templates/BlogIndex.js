import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogIntro from '../components/BlogIntro';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogNavigation from '../components/BlogNavigation';
import BlogPreview from '../components/BlogPreview';

class BlogIndex extends React.Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, location, pageContext } = this.props;

    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="Stories"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <BlogIntro />
        {posts.map(({ node }) => (
          <BlogPreview post={node} key={node.fields.slug} />
        ))}
        <BlogNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query($limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
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

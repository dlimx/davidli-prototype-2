import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogNavigation from '../components/BlogNavigation/index';

class StoriesIndex extends React.Component {
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
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: 16,
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
        <BlogNavigation pageContext={pageContext} />
      </Layout>
    );
  }
}

export default StoriesIndex;

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

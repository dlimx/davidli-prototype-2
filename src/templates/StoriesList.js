import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import BlogNavigation from '../components/BlogNavigation/index';

export default class StoriesList extends React.Component {
  static propTypes = {
    date: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, pageContext } = this.props;
    const posts = data.allMarkdownRemark.edges;
    return (
      <Layout>
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

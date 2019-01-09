import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import BlogIntro from '../components/BlogIntro';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';

class BlogPost extends React.Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({
      previous: PropTypes.shape({}),
      next: PropTypes.shape({}),
    }).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, pageContext, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BackButton to="/stories/" />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: `block`,
            marginBottom: 16,
            marginTop: 16,
          }}
        >
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: 16,
          }}
        />
        <BlogIntro />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/stories${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/stories${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default BlogPost;

export const blogPostQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

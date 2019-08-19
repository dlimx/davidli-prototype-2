import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import BackButton from '../components/BackButton';

import profile from '../../content/assets/IMG_2223-ConvertImage.jpg';

class ProjectPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    pageContext: PropTypes.shape({
      previous: PropTypes.shape({}),
      next: PropTypes.shape({}),
    }).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, location } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout
        right={
          <img
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        }
        location={location}
        title={siteTitle}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <BackButton to="/work/" />
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
      </Layout>
    );
  }
}

export default ProjectPage;

export const pageQuery = graphql`
  query ProjectPageBySlug($slug: String!) {
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
        date(formatString: "MMMM, YYYY")
        tags
        website
      }
    }
  }
`;

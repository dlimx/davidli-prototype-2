import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, withPrefix } from 'gatsby';

import constants from '../constants';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

class AboutIndex extends Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired,
    data: PropTypes.shape({}).isRequired,
  };

  render() {
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`gatsby`, `application`, `react`, `david`]}
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
        <p>
          I have two broad goals in life: make the world a better place, and
          live and create interesting stories.
        </p>
        <hr />
        <h3>Links</h3>
        <a href={withPrefix('/Resume-LiMinXiao.pdf')}>Resume</a>
      </Layout>
    );
  }
}

export default AboutIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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

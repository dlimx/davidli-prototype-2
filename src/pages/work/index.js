import React, { Component } from 'react';
import { graphql, withPrefix } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO';
import ProjectPreview from '../../components/ProjectPreview';

import profile from '../../../content/assets/IMG_2223-ConvertImage.jpg';

class WorkIndex extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  };

  render() {
    const { data } = this.props;
    const projects = data.allMarkdownRemark.edges;
    return (
      <Layout
        right={() => (
          <img
            alt="Profile"
            src={profile}
            style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
          />
        )}
      >
        <SEO
          title="Work"
          keywords={[`work`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Work</h1>
        <p>
          I am a software engineer currently at{' '}
          <a href="https://quartermaster.house">Quartermaster</a>.
        </p>
        <p>
          I graduated <a href="https://mcgill.ca">McGill University</a> with a
          degree in Honours Biochemistry. I had initially planned on pursuing
          medicine - but I found that my passions lie with software.
        </p>

        <hr />

        <h3>Links</h3>
        <a href={withPrefix('/Resume-LiMinXiao.pdf')}>Resume</a>

        <hr />

        {projects.map(({ node }) => (
          <ProjectPreview post={node} key={node.fields.slug} />
        ))}
      </Layout>
    );
  }
}

export default WorkIndex;

export const projectListQuery = graphql`
  query projectListQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { collection: { eq: "projects" } }
    ) {
      edges {
        node {
          collection
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;

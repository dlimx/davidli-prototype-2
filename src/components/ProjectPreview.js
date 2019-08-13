import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LinkTransitioner from './LinkTransitioner';

export default class ProjectPreview extends Component {
  static propTypes = {
    post: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string.isRequired,
      }).isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
      }).isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { post } = this.props;
    const title = post.frontmatter.title || post.fields.slug;

    return (
      <div key={post.fields.slug}>
        <h3
          style={{
            marginBottom: 16,
          }}
        >
          <LinkTransitioner
            style={{ boxShadow: `none` }}
            to={`/work${post.fields.slug}`}
          >
            {title}
          </LinkTransitioner>
        </h3>
        <small>{post.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
      </div>
    );
  }
}

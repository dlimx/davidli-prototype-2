import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import theme from '../theme/theme.scss';

export default class BlogPreview extends Component {
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
      <Link to={`/stories${post.fields.slug}`} key={post.fields.slug}>
        <h3
          style={{
            marginTop: 16,
            marginBottom: 0,
            color: theme.colorTextHeader,
          }}
        >
          {title}
        </h3>
        <small>{post.frontmatter.date}</small>
        <p
          className="link-text"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          style={{ paddingBottom: 32 }}
        />
      </Link>
    );
  }
}

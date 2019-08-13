import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import LinkTransitioner from './LinkTransitioner';

export default class BlogNavigation extends Component {
  static propTypes = {
    pageContext: PropTypes.shape({}).isRequired,
  };

  render() {
    const { pageContext } = this.props;
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    return (
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
          {!isFirst && (
            <LinkTransitioner to={`/stories${prevPage}`} rel="prev">
              ← Previous Page
            </LinkTransitioner>
          )}
        </li>
        <li>
          {!isLast && (
            <LinkTransitioner to={`/stories/${nextPage}`} rel="next">
              Next Page →
            </LinkTransitioner>
          )}
        </li>
      </ul>
    );
  }
}

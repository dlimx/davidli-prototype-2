import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../theme/reset.css';
import '../theme/base.scss';
import variables from '../theme/_Variables.scss';

import Header from './Header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout--grid-row layout--container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            padding: '1rem 0',
            maxWidth: variables.bodyWidth,
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

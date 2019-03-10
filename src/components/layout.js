import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../theme/reset.css';
import '../theme/base.scss';
import variables from '../theme/_Variables.scss';

import Header from './Header/Header';

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
      <div className="layout--grid-row main--container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="layout--container">{children}</div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

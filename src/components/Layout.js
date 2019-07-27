import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LayoutComponent from './LayoutComponent';

class Layout extends Component {
  render() {
    return (
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
        render={data => <LayoutComponent {...this.props} data={data} />}
      />
    );
  }
}

export default Layout;

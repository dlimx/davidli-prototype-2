import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LayoutComponent from './LayoutComponent';
import WindowContext from '../context/WindowContext';

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
        render={data => (
          <WindowContext.Consumer>
            {windowContext => (
              <LayoutComponent
                {...this.props}
                data={data}
                windowContext={windowContext}
              />
            )}
          </WindowContext.Consumer>
        )}
      />
    );
  }
}

export default Layout;

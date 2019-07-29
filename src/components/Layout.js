import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import LayoutComponent from './LayoutComponent';
import ThemeContext from '../context/ThemeContext';

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
          <ThemeContext.Consumer>
            {theme => (
              <LayoutComponent
                {...this.props}
                data={data}
                width={theme.width}
              />
            )}
          </ThemeContext.Consumer>
        )}
      />
    );
  }
}

export default Layout;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import { StickyContainer, Sticky } from 'react-sticky';

export class LayoutComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { data, children } = this.props;
    return (
      <div>
        <StickyContainer>
          <div style={{ height: 100 }} />
          <Sticky topOffset={100}>
            {({
              style,

              // the following are also available but unused in this example
              isSticky,
              wasSticky,
              distanceFromTop,
              distanceFromBottom,
              calculatedHeight,
            }) => (
              <header style={style}>
                <Header siteTitle={data.site.siteMetadata.title} />
              </header>
            )}
          </Sticky>
          <div className="layout--grid-row main--container">
            <div className="layout--container">{children}</div>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default LayoutComponent;

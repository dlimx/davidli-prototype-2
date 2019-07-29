import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StickyContainer, Sticky } from 'react-sticky';
import Header from './Header/Header';

import theme from '../theme/theme.scss';
import styles from './LayoutComponent.module.scss';

class LayoutComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    windowContext: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  defaultOffset = 200;

  render() {
    const { data, children, windowContext } = this.props;

    return (
      <StickyContainer>
        <div className={styles.placeholder} />
        <Sticky
          topOffset={
            windowContext.width > Number.parseInt(theme.mdValue, 10)
              ? this.defaultOffset
              : 0
          }
        >
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
        <div className="main--container">
          <div className="layout--container">{children}</div>
        </div>
      </StickyContainer>
    );
  }
}

export default LayoutComponent;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StickyContainer, Sticky } from 'react-sticky';
import classNames from 'classnames';
import Header from './Header/Header';

import theme from '../theme/theme.scss';
import styles from './LayoutComponent.module.scss';

class LayoutComponent extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    right: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    fixedRight: PropTypes.bool,
    windowContext: PropTypes.shape({
      width: PropTypes.number.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    right: null,
    fixedRight: true,
  };

  defaultOffset = 200;

  render() {
    const { data, children, windowContext, right, fixedRight } = this.props;

    const isPhone = windowContext.width < Number.parseInt(theme.mdValue, 10);
    const showRight = !isPhone && !!right;

    return (
      <div className={classNames(showRight && 'layout--grid-row')}>
        <div
          style={{
            width: showRight ? '70%' : '100%',
            paddingLeft: showRight ? '10%' : 0,
          }}
        >
          <div className={styles.placeholder} />
          <StickyContainer>
            <Sticky topOffset={0}>
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
        </div>
        {showRight && (
          <div className={styles.rightPlaceholder}>
            <div
              className={styles.rightContainer}
              style={{ position: fixedRight ? 'fixed' : 'relative' }}
            >
              {right}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LayoutComponent;

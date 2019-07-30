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

    return (
      <div className={classNames(!!right && 'layout--grid-row')}>
        <div style={{ width: !right || isPhone ? '100%' : '70%' }}>
          <div className={styles.placeholder} />
          <StickyContainer>
            <Sticky topOffset={isPhone ? 0 : this.defaultOffset}>
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
        {!isPhone && !!right && (
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

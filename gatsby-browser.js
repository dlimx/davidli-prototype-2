/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';

// custom typefaces
import 'typeface-fira-sans';

import './src/theme/fonts/fonts.css';
import styles from './src/theme/theme.scss';

import { WindowProvider } from './src/context/WindowContext';

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <WindowProvider>{element}</WindowProvider>
);

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  getSavedScrollPosition,
}) => {
  return true;
  // if (
  //   routerProps.location.action === 'POP' ||
  //   routerProps.location.href === prevRouterProps.location.href
  // ) {
  //   return true;
  // }

  // const prevPosition = getSavedScrollPosition(prevRouterProps.location);
  // const currentPosition = getSavedScrollPosition(routerProps.location);

  // const position = currentPosition || prevPosition;

  // if (window.innerWidth && window.innerWidth >= styles.mdValue && position) {
  //   const [prevX, prevY] = position;

  //   const offset = Number.parseInt(styles.headerPaddingValue, 10);

  //   const y = prevY > offset ? offset : prevY;

  //   window.scrollTo(prevX, y);

  //   return false;
  // }

  // return true;
};

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// custom typefaces
import 'typeface-fira-sans';

import './src/theme/fonts/fonts.css';
import './src/theme/theme.scss';

import React from 'react';
import { WindowProvider } from './src/context/WindowContext';

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <WindowProvider>{element}</WindowProvider>
);

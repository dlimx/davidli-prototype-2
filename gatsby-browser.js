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
import { ThemeProvider } from './src/context/ThemeContext';

/* eslint-disable */
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import constants from '../../constants/index';

import styles from './styles.module.scss';
import variables from '../../theme/base.scss';
import image from './logo.png';

const linkStyle = {
  color: variables.colorPrimary,
  textDecoration: 'none',
  paddingTop: '3px',
  paddingBottom: '3px',
  margin: '1rem 0',
  fontFamily: `${variables.fontBody}, sans-serif`,
};

const activeLinkStyle = {
  borderBottom: `3px solid ${variables.colorPrimary}`,
  paddingBottom: '0px',
};

const Header = () => (
  <div className={`${styles.header}`}>
    <Link to="/">
      <img src={image} alt="logo" style={{ height: 40, width: 40 }} />
    </Link>
    <Link to="/" style={linkStyle} activeStyle={activeLinkStyle}>
      about
    </Link>
    {constants.blogActive && (
      <Link to="/stories/" style={linkStyle} activeStyle={activeLinkStyle}>
        stories
      </Link>
    )}
    <Link to="/work/" style={linkStyle} activeStyle={activeLinkStyle}>
      work
    </Link>
  </div>
);

export default Header;

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import constants from '../../constants/index';

import styles from './styles.module.scss';
import variables from '../../theme/base.scss';

const linkStyle = {
  color: variables.colorPrimary,
  textDecoration: 'none',
  paddingTop: '3px',
  paddingBottom: '3px',
  margin: '5px 10px',
  fontFamily: `${variables.fontBody}, sans-serif`,
};

const activeLinkStyle = {
  borderBottom: `3px solid ${variables.colorPrimary}`,
  paddingBottom: '0px',
};

const Header = ({ siteTitle }) => (
  <div className={styles.container} style={{ marginBottom: '2em' }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      className={styles.header}
    >
      <h1 className={styles.logo} style={{ margin: 0, flex: 1 }}>
        <Link
          to="/"
          style={{
            color: variables.colorPrimary,
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
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
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

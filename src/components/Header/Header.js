import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import constants from '../../constants/index';

import styles from './HeaderStyles.module.scss';
import image from './logo.png';

const Header = () => (
  <div className={`${styles.container}`}>
    <div className={`${styles.header}`}>
      <Link to="/">
        <img src={image} alt="logo" style={{ height: 40, width: 40 }} />
      </Link>
      <div className={styles.linkContainer}>
        <Link
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          about
        </Link>
        {constants.blogActive && (
          <Link
            to="/stories/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            stories
          </Link>
        )}
        <Link
          to="/work/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          work
        </Link>
      </div>
    </div>
  </div>
);

export default Header;

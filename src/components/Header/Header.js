import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import constants from '../../constants/index';

import styles from './HeaderStyles.module.scss';
import image from './logo.png';

const Header = () => (
  <div className={`${styles.container}`}>
    <div className={`${styles.header}`}>
      <div className={`${styles.headerLinks}`}>
        <Link to="/">
          <img src={image} alt="logo" className={`${styles.headerImage}`} />
        </Link>
        <div className={styles.linkContainer}>
          <Link
            to="/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            about
          </Link>
          {constants.blogActive && (
            <Link
              to="/stories/"
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              stories
            </Link>
          )}
          <Link
            to="/work/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            work
          </Link>
        </div>
      </div>

      <div className={`layout--grid-row ${styles.headerContent}`}>
        <p>hey</p>
        <p>hey</p>
      </div>
      <div className={`layout--grid-row ${styles.headerContent}`}>
        <p>hey</p>
        <p>hey</p>
      </div>
    </div>
  </div>
);

export default Header;

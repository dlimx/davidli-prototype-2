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
      <div className={`${styles.headerContent}`}>
        <h6>Find me on: </h6>
        <div className="layout--grid-row">
          <p>hey asdasd</p>
          <p>hey asdasd</p>
          <p>hey asdasd</p>
          <p>hey asdasd</p>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

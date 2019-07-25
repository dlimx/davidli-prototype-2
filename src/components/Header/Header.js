import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './HeaderStyles.module.scss';
import constants from '../../constants/index';

import image from './logo.png';

const Header = () => (
  <div className={classNames(styles.header)}>
    <div className={classNames('main--container', styles.headerLinks)}>
      <Link to="/" className={`${styles.headerImage}`}>
        <img src={image} alt="logo" className={`${styles.headerImage}`} />
      </Link>
      <div className={styles.linkContainer}>
        <Link
          to="/"
          className={classNames('header-link', styles.link)}
          activeClassName={styles.linkActive}
        >
          About
        </Link>
        {constants.blogActive && (
          <Link
            to="/stories/"
            className={classNames('header-link', styles.link)}
            activeClassName={styles.linkActive}
          >
            Stories
          </Link>
        )}
        <Link
          to="/work/"
          className={classNames('header-link', styles.link)}
          activeClassName={styles.linkActive}
        >
          Work
        </Link>
      </div>
    </div>
  </div>
);

export default Header;

import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './HeaderStyles.module.scss';
import constants from '../../constants/index';

import image from './logo.png';
import LinkTransitioner from '../LinkTransitioner';

const Header = () => (
  <div className={classNames(styles.header)}>
    <div className={classNames(styles.headerLinks)}>
      <LinkTransitioner to="/" className={`${styles.headerImage}`}>
        <img src={image} alt="logo" className={`${styles.headerImage}`} />
      </LinkTransitioner>
      <div className={styles.linkContainer}>
        <LinkTransitioner
          to="/"
          className={classNames('header-link', styles.link)}
          activeClassName={styles.linkActive}
        >
          About
        </LinkTransitioner>
        {constants.blogActive && (
          <LinkTransitioner
            to="/stories"
            className={classNames('header-link', styles.link)}
            activeClassName={styles.linkActive}
          >
            Stories
          </LinkTransitioner>
        )}
        <LinkTransitioner
          to="/work"
          className={classNames('header-link', styles.link)}
          activeClassName={styles.linkActive}
        >
          Work
        </LinkTransitioner>
      </div>
    </div>
  </div>
);

export default Header;

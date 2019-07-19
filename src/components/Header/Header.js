import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';

import constants from '../../constants/index';

import styles from './HeaderStyles.module.scss';
import image from './logo.png';
import Icon from '../Icon';

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
            About
          </Link>
          {constants.blogActive && (
            <Link
              to="/stories/"
              className={styles.link}
              activeClassName={styles.linkActive}
            >
              Stories
            </Link>
          )}
          <Link
            to="/work/"
            className={styles.link}
            activeClassName={styles.linkActive}
          >
            Work
          </Link>
        </div>
      </div>

      <div className={`${styles.headerContent}`}>
        <a
          className={`${styles.headerContentIcon}`}
          title="Email"
          href="mailto:me@davidli.io?subject=Hello!"
        >
          <Icon size={24} name="MdMail" />
        </a>
        <a
          className={`${styles.headerContentIcon}`}
          title="LinkedIn"
          href="https://www.linkedin.com/in/dlimx/"
        >
          <Icon size={26} name="LogoLinkedin" />
        </a>
        <a
          className={`${styles.headerContentIcon}`}
          title="Instagram"
          href="https://www.instagram.com/dli.mx/"
        >
          <Icon size={26} name="LogoInstagram" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Link
          to="/stories"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: 16,
          }}
        >
          Stories
        </Link>
        <Link
          to="/work"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Work
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

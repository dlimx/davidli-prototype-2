import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default class BackButton extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
  };

  render() {
    const { to } = this.props;
    return (
      <Link to={to} rel="prev">
        <h5>← Back</h5>
      </Link>
    );
  }
}

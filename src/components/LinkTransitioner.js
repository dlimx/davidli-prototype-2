import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default class LinkTransitioner extends Component {
  static propTypes = {
    animation: PropTypes.string,
    to: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  //   animation: 'fade',
  // };

  render() {
    return <Link {...this.props} />;
  }
}

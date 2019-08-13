import React, { Component } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';

export default class LinkTransitioner extends Component {
  static propTypes = {
    animation: PropTypes.string,
    to: PropTypes.string.isRequired,
  };

  static defaultProps = {
    animation: 'fade',
  };

  render() {
    const { animation } = this.props;
    const animationWrapper = {
      [animation]: true,
    };

    return <AniLink {...this.props} {...animationWrapper} />;
  }
}

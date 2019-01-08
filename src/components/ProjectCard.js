import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProjectCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

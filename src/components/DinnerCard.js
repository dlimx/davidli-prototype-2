import React from 'react';
import PropTypes from 'prop-types';

class DinnerCard extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <img className="img" src={this.props.image} />
      </div>
    );
  }
}

DinnerCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DinnerCard;

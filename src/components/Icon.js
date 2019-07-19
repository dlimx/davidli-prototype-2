import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'react-icons/io';

const Icon = props => {
  const { name } = props;
  const ActiveIcon = Icons[`Io${name}`];

  if (!name || !ActiveIcon) {
    console.warn(`No Icon of ${name} found`);
    return null;
  }

  return <ActiveIcon {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

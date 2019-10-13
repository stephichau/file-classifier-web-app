import React from 'react';
import './Icon.scss';
import PropTypes from 'prop-types';

const Icon = (props) => {
  const { id, icon, options } = props;
  return (
    <i id={id} className={`fas fa-fw fa-${icon} ${options}`} />
  );
};

Icon.propTypes = {
  id: PropTypes.number,
  icon: PropTypes.string.isRequired,
  options: PropTypes.string
};

Icon.defaultProps = {
  id: 0,
  options: ''
};

export default Icon;

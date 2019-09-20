import React from 'react';
import { Link } from 'react-router-dom';
import './Brand.scss';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';

const brand = (props) => {
  const { id, className, brandName } = props;
  return (
    <Link to="/" id={id} className={className}>
      <div className="sidebar-brand-icon rotate-n-15">
        <Icon icon="laugh-wink" />
      </div>
      <div className="sidebar-brand-text mx-3">
        {brandName}
      </div>
    </Link>
  );
};

brand.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  brandName: PropTypes.string.isRequired
};

brand.defaultProps = {
  id: 0,
  className: ''
};

export default brand;

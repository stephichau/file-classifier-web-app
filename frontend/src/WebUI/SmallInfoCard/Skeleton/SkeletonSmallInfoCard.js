import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/core/Skeleton';
import Paper from '@material-ui/core/Paper';

const SkeletonSmallInfoCard = ({

}) => (

);

SkeletonSmallInfoCard.defaultProps = {
  subtitle: undefined,
};

SkeletonSmallInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

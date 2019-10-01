import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const SmallInfoCard = ({

}) => (

);

SmallInfoCard.defaultProps = {
  subtitle: undefined,
};

SmallInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};


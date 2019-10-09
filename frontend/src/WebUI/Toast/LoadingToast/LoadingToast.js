import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingToast = ({
  classes,
  content,
}) => (
  <>
    <CircularProgress color="secondary" className={classes.spinner} size={20} />
    {content}
  </>
);


LoadingToast.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

export default LoadingToast;

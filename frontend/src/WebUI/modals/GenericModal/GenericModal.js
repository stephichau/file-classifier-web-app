import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

const GenericModal = ({
  classes,
  children,
}) => {
  return (
    <Dialog
      open
      className={classes.dialogContainer}
    >
      {children}
    </Dialog>
  );
};

GenericModal.defaultProps = {
  children: null,
};

GenericModal.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default GenericModal;

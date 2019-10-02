import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const GenericFormStructure = ({
  classes,
  title,
  children,
  i18n,
  onCancel,
  onSubmit,
}) => (
  <Paper
    elevation={0}
    className={classes.container}
  >
    <Typography className={classes.title}>
      {title}
    </Typography>
    <div className={classes.inputContainer}>
      {children}
    </div>
    <div className={classes.buttonsContainer}>
      <Button onClick={onCancel} variant="contained" className={classes.cancelButton}>
        <Typography>
          {i18n.cancel}
        </Typography>
      </Button>
      <Button onClick={onSubmit} variant="contained" className={classes.submitButton}>
        <Typography>
          {i18n.submit}
        </Typography>
      </Button>
    </div>
  </Paper>
);

GenericFormStructure.defaultProps = {
  children: undefined,
  onSubmit: () => {},
  onCancel: () => {},
};

GenericFormStructure.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  i18n: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

export default GenericFormStructure;

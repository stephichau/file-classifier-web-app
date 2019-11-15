import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VirtualizedTable from '../../../WebUI/VirtualizedTable';
import { Button } from '../../../WebUI/Buttons';

const AdminCourses = ({
  classes,
  onAddCourse,
  ...restOfProps
}) => {
  return (
    <div className={classes.container}>
      <Button onClick={onAddCourse} buttonType="add">
        <AddCircleIcon fontSize="small" />
        <Typography className={classes.text}>Agregar curso</Typography>
      </Button>
      <VirtualizedTable {...restOfProps} />
    </div>
  );

};

AdminCourses.defaultProps = {
  onAddCourse: () => {},
};

AdminCourses.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddCourse: PropTypes.func,
};

export default AdminCourses;

import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedTable from '../../../WebUI/VirtualizedTable';

const AdminCourses = ({
  classes,
  ...restOfProps
}) => {

  return (
    <div className={classes.container}>
      <VirtualizedTable {...restOfProps} />
    </div>
  );

};

AdminCourses.defaultProps = {

};

AdminCourses.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AdminCourses;

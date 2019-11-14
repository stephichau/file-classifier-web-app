import React from 'react';
import PropTypes from 'prop-types';
import VirtualizedTable from '../../../WebUI/VirtualizedTable';

const AdminCourses = ({
  classes,
  ...restOfProps
}) => {

  return <VirtualizedTable {...restOfProps} />;
};

AdminCourses.defaultProps = {

};

AdminCourses.propTypes = {

};

export default AdminCourses;

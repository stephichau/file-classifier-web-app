import { withStyles } from '@material-ui/core';
import styles from './styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AdminCourses from './Courses';
import passingProps from './passingProps';

import {
  CREATE_COURSE_MODAL,
  showModal,
  hideModal,
} from '../../modals/actions';

import {
  withPassingProps,
} from '../../../WebUI';

import actions from '../../../store/actions';

const {
  courses: {
    POST_COURSE_REQUEST,
    GET_COURSES_REQUEST,
    DELETE_COURSE_REQUEST,
  },
} = actions;

const mapStateToProps = ({ user, generic }) => ({
  user,
  generic,
});

const mapDispatchToProps = dispatch => ({
  resetState: ({ type }) => dispatch({ type }),
  getCourses: async () => await dispatch({ type: GET_COURSES_REQUEST }),
  deleteCourse: async props =>  await(dispatch({ type: DELETE_COURSE_REQUEST, props})),
  hideModal: () => dispatch(hideModal()),
  showCreateCourseModal: modalProps => dispatch(showModal(CREATE_COURSE_MODAL, modalProps)),
  submitCreateCourseModal: props => dispatch({ type: POST_COURSE_REQUEST, props }),
});



export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPassingProps(passingProps),
)(AdminCourses);

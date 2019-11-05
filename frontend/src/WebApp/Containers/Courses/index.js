import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Courses from './Courses';
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
  },
} = actions;

const mapStateToProps = ({ user, generic }) => ({
  user,
  generic,
});

const mapDispatchToProps = dispatch => ({
  getCourses: async () => await dispatch({ type: GET_COURSES_REQUEST }),
  hideModal: () => dispatch(hideModal()),
  showCreateCourseModal: modalProps => dispatch(showModal(CREATE_COURSE_MODAL, modalProps)),
  submitCreateCourseModal: props => dispatch({ type: POST_COURSE_REQUEST, props }),
});



export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPassingProps(passingProps),
  )(Courses);

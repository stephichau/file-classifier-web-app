import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Courses from './Courses';
import passingProps from './passingProps';
import {
  withPassingProps,
} from '../../../WebUI';

const mapStateToProps = ({ user }) => ({
  user,
});


export default compose(
  withStyles(styles),
  connect(mapStateToProps, null),
  withPassingProps(passingProps),
  )(Courses);

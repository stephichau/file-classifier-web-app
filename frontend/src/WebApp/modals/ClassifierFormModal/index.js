import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import passingProps from './passingProps';
import {
  withPassingProps,
} from '../../../WebUI';
import styles from './styles';
import ClassifierForm from './ClassifierFormModal';

export default compose(
  withStyles(styles),
  withPassingProps(passingProps),
)(ClassifierForm);

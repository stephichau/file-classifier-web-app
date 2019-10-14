import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import passingProps from './passingProps';
import {
  withPassingProps,
} from '../../../WebUI';
import styles from './styles';
import SheetMaker from './SheetMakerModal';

export default compose(
  withStyles(styles),
  withPassingProps(passingProps),
)(SheetMaker);

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Course from './Course';
import passingProps from './passingProps';
import {
  SHEET_MAKER_MODAL,
  showModal,
} from '../../modals/actions';
import {
  withPassingProps,
} from '../../../WebUI';

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  showAnswerSheetModal: modalProps => dispatch(showModal(SHEET_MAKER_MODAL, modalProps))
});


export default compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPassingProps(passingProps),
  )(Course);

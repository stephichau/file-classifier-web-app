import { compose } from 'redux';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Course from './Course';
import passingProps from './passingProps';
import {
  SHEET_MAKER_MODAL,
  CLASSIFIER_FORM_MODAL,
  showModal,
  hideModal,
} from '../../modals/actions';
import {
  withPassingProps,
} from '../../../WebUI';

import actions from '../../../store/actions';

const {
  answerSheet: { POST_ANSWER_SHEET_REQUEST },
  classifier: { POST_CLASSIFIER_FORM_REQUEST },
} = actions;

const mapStateToProps = ({ user, generic }) => ({
  user,
  generic,
});

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showAnswerSheetModal: modalProps => dispatch(showModal(SHEET_MAKER_MODAL, modalProps)),
  submitAnswerSheet: props => dispatch({ type: POST_ANSWER_SHEET_REQUEST, props }),
  showClassifierFormModal: modalProps => dispatch(showModal(CLASSIFIER_FORM_MODAL, modalProps)),
  submitClassifierForm: props =>  dispatch({ type: POST_CLASSIFIER_FORM_REQUEST, props})
});


export default compose(
  withTranslation(),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  withPassingProps(passingProps),
  )(Course);

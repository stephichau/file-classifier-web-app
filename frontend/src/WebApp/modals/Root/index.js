import { connect } from 'react-redux';
import { hideModal } from '../actions';
import RootContainer from './Root';

const mapStateToProps = ({ modal: modalState }) => ({
  ...modalState,
});

const mapDispatchToProps = dispatch => ({
  onHideModal: () => dispatch(hideModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
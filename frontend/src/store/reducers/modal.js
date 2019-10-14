import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../../WebApp/modals/actions';

const INITIAL_STATE = {
  type: null,
  props: {},
};

const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case SHOW_MODAL: {
      return {
        type: action.type,
        props: action.props,
      };
    }
    case HIDE_MODAL: {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default modalReducer;

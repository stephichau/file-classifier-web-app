const INITIAL_STATE = {

};

const genericReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  if (!type) return INITIAL_STATE;
  const name = type.replace(`_${type.split('_').pop()}`, '');
  if (type.endsWith('_REQUEST')) {
    return {
      ...state,
      [name]: {
        error: null,
        payload: null,
        loading: true,
      }
    };
  } else if (type.endsWith('_SUCCESS')) {
    return {
      ...state,
      [name]: {
        error: null,
        payload: action.payload,
        loading: false,
      }
    };
  } else if (type.endsWith('_FAILURE')) {
    return {
      ...state,
      [name]: {
        error: action.error,
        payload: null,
        loading: false,
      }
    };
  }
  return state;
};

export default genericReducer;
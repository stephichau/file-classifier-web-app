import actions from '../actions';

const initialState = {
  users: [],
  colors: []
};

const reqres = (state = initialState, action) => {
  switch (action.type) {
    case actions.reqres.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users
      };
    case actions.reqres.GET_COLORS_SUCCESS:
      return {
        ...state,
        colors: action.colors
      };
    default:
      return state;
  }
};

export default reqres;
import actions from '../actions';

const initialState = {
  navbarExpanded: true,
  userDropExpanded: false,
  username: 'Seli',
  avatar: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
  loading: false,
  error: null
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case actions.ui.expandNavbar:
      return {
        ...state,
        navbarExpanded: true
      };
    case actions.ui.COLLAPSE_NAVBAR:
      return {
        ...state,
        navbarExpanded: false
      };
    case actions.ui.EXPAND_USER_DROPDOWN:
      return {
        ...state,
        userDropExpanded: true
      };
    case actions.ui.COLLAPSE_USER_DROPDOWN:
      return {
        ...state,
        userDropExpanded: false
      };
    case actions.reqres.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.reqres.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actions.reqres.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actions.reqres.GET_COLORS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.reqres.GET_COLORS_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actions.reqres.GET_COLORS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default global;

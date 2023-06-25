import { Reducer } from 'redux';

import { AuthAction, AuthState } from '../types/auth';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;

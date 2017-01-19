import {
  AUTH_FIELD_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  NAVIGATE_TO_PASSWORD_RESET } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null, // User object returned from a successfull firebase login
    error: '',
    loading: false,
    password_confirmation: '',
    code: '' // email verification code sent for password reset
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_FIELD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state,
        error: action.payload,
        password: '',
        loading: false };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, error: 'You have been logged out.' };
    case LOGOUT_USER_FAIL:
      return { ...state,
        error: action.payload,
        loading: false };
    case NAVIGATE_TO_PASSWORD_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};

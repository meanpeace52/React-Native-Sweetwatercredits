import {
  AUTH_FIELD_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  NAVIGATE_TO_AUTH_UPDATE_FORM,
  PASSWORD_RESET_EMAIL_SENT,
  PASSWORD_RESET_EMAIL_ERROR,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_CREDENTIAL_FAIL } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null, // User object returned from a successfull firebase login
    error: '',
    loading: false,
    notice: '',
    newPassword: '',
    newPasswordConfirm: '',
    newEmail: ''
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
        loading: false,
        notice: '' };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, notice: 'You have been logged out.' };
    case LOGOUT_USER_FAIL:
      return { ...state,
        error: action.payload,
        loading: false };
    case NAVIGATE_TO_AUTH_UPDATE_FORM:
      return INITIAL_STATE; // TODO: change dis
    case PASSWORD_RESET_EMAIL_SENT:
      return { ...state,
        ...INITIAL_STATE,
        notice: 'An email has been sent with instructions to reset your password.' };
    case PASSWORD_RESET_EMAIL_ERROR:
      return { ...state,
        email: '',
        loading: false,
        error: action.payload };
    case UPDATE_PASSWORD_SUCCESS:
      return { ...state,
        ...INITIAL_STATE,
        notice: 'Password successfully updated.' };
    case UPDATE_EMAIL_SUCCESS:
    return { ...state,
      ...INITIAL_STATE,
      notice: 'Email successfully updated.' };
    case UPDATE_CREDENTIAL_FAIL:
      return { ...state,
        ...INITIAL_STATE,
        error: action.payload };
    default:
      return state;
  }
};

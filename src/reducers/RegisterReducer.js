import { REGISTER_FIELD_UPDATE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  passwordConfirmation: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_FIELD_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return state;
    case REGISTER_USER_FAIL:
      return { ...state,
        error: action.payload,
        password: '',
        passwordConfirmation: '',
        loading: false };
    default:
      return state;
  }
};

import {
  RULE_VIOLATION_UPDATE,
  RULE_VIOLATION_CREATE,
  RULE_VIOLATION_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  rule: 'impact',
  violation: '',
  zoneType: '',
  penalty: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RULE_VIOLATION_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    case RULE_VIOLATION_CREATE :
      return INITIAL_STATE;
    case RULE_VIOLATION_SAVE_SUCCESS :
      return INITIAL_STATE;
    default:
      return state;
  }
};

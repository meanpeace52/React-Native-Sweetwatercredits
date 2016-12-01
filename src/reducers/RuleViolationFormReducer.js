import { RULE_VIOLATION_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  rule: '',
  violation: '',
  penalty: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case RULE_VIOLATION_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

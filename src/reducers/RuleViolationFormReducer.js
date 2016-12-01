import { RULE_VIOLATION_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  violation: '',
  
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RULE_VIOLATION_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};

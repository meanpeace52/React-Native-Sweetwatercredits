import { DISTURBANCE_CREATE, DISTURBANCE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  // project: '',
  acreage: '',
  zoneType: 'Core',
  primaryRuleViolation: '',
  secondaryRuleViolation: '',
  penaltyAmount: '0'
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISTURBANCE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DISTURBANCE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

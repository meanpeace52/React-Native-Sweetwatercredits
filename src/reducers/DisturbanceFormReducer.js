import { DISTURBANCE_CREATE, DISTURBANCE_UPDATE, DISTURBANCE_NEW } from '../actions/types';

const INITIAL_STATE = {
  projectUid: '',
  acreage: '',
  zoneType: 'Core',
  ruleViolation: 'impact',
  vulnerableLocation: false,
  penaltyAmount: '0'
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISTURBANCE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DISTURBANCE_CREATE:
      return INITIAL_STATE;
    case DISTURBANCE_NEW:
      return INITIAL_STATE;
    default:
      return state;
  }
};

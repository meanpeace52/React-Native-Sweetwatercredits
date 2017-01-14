import {
  DISTURBANCE_CREATE,
  DISTURBANCE_UPDATE,
  DISTURBANCE_NEW,
  DISTURBANCE_ZONE_TYPE_UPDATE,
  DISTURBANCE_VIOLATION_UPDATE,
  DISTURBANCE_ACREAGE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  projectUid: '',
  acreage: '0',
  zoneType: 'Core',
  ruleViolation: '',
  vulnerableLocation: false,
  debitAmount: '0'
};

export default(state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case DISTURBANCE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DISTURBANCE_CREATE:
      return INITIAL_STATE;
    case DISTURBANCE_NEW:
      return INITIAL_STATE;
    case DISTURBANCE_ZONE_TYPE_UPDATE:
      return { ...state, ...INITIAL_STATE, zoneType: action.payload };
    case DISTURBANCE_VIOLATION_UPDATE:
      return {
        ...state,
        ...INITIAL_STATE,
        zoneType: action.payload.zoneType,
        ruleViolation: action.payload.ruleViolation
      };
    case DISTURBANCE_ACREAGE_UPDATE:
    return {
      ...state,
      ...INITIAL_STATE,
      zoneType: action.payload.zoneType,
      ruleViolation: action.payload.ruleViolation,
      acreage: action.payload.acreage
    };
    default:
      return state;
  }
};

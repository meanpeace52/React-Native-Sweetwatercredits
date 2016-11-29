import { ZONE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  acreage: '',
  zoneType: 'Core',
  project_uid: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ZONE_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    // case PROJECT_CREATE :
    //   // clears out the form
    //   return INITIAL_STATE;
    default:
      return state;
  }
};

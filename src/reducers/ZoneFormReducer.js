import {
  ZONE_UPDATE,
  ZONE_CREATE,
  ZONE_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  acreage: '',
  zoneType: 'Core', // defaulting this here. but could honestly default this in the onButtonPress
  projectUid: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ZONE_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    case ZONE_CREATE :
      // clears out the form
      return INITIAL_STATE;
    case ZONE_SAVE_SUCCESS :
      return INITIAL_STATE;
    default:
      return state;
  }
};

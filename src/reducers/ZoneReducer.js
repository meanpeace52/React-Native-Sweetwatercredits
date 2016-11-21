import { ADD_ZONE } from '../actions/types'

const INITIAL_STATE = [ {acreage: 0, zoneType: "Core"} ]

export default (state = INITIAL_STATE, action) => {
  console.log('/reducers: ZoneReducers');
  console.log(state);
  switch(action.type) {
    case ADD_ZONE :
      return state;
    default:
      return state;
  }
}

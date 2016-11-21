import { UPDATE_ZONE } from '../actions/types'

const INITIAL_STATE = {
  acreage: '',
  type: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_ZONE :
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}

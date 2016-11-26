import { PROJECT_UPDATE, PROJECT_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: ''
}

export default ( state = [] , action) => {
  switch(action.type) {
    case PROJECT_UPDATE :
      // action.payload === { prop: 'name', value: 'jane'}
      return {...state, [action.payload.prop]: action.payload.value };
    case PROJECT_CREATE :
      // clear out form
      return INITIAL_STATE;
    default:
      return state;
  }
};

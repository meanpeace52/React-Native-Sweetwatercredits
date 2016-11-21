import { UPDATE_PROJECT } from '../actions/types';

export default ( state = [], action) => {
  switch(action.type) {
    case UPDATE_PROJECT :
      // action.payload === { prop: 'name', value: 'jane'}
      // return { ...state, [action.payload.prop]: action.payload.value };
      return [ ...state, {
        [action.payload.prop]: action.payload.value
      }
    ]
    default:
      return state;
  }
  console.log(state);
};

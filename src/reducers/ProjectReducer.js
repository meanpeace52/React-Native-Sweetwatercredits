import { PROJECTS_FETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PROJECTS_FETCH :
      console.log(action);
    default:
      return state;
  }
};

import { PROJECT_UPDATE, PROJECT_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROJECT_UPDATE :
      return { ...state, [action.payload.prop]: action.payload.value };
    case PROJECT_CREATE :
      // clears out the form
      return INITIAL_STATE;
    default:
      return state;
  }
};

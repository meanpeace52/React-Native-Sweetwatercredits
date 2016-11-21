import { combineReducers } from 'redux';
import ZoneReducer from './ZoneReducer'
// import other reducers here

export default combineReducers({
  zones: ZoneReducer
});

import { combineReducers } from 'redux';
import ZoneReducer from './ZoneReducer'
import ProjectReducer from './ProjectReducer'
// import other reducers here

export default combineReducers({
  zonesForm: ZoneReducer,
  projectsForm: ProjectReducer
});

import { combineReducers } from 'redux';
import ProjectFormReducer from './ProjectFormReducer';
import ProjectReducer from './ProjectReducer';
// import other reducers here

export default combineReducers({
  projectsForm: ProjectFormReducer,
  projects: ProjectReducer
});

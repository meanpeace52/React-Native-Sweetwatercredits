import { combineReducers } from 'redux';
import ProjectFormReducer from './ProjectFormReducer';
import ProjectReducer from './ProjectReducer';
// import other reducers here
import AuthReducer from './AuthReducer';

export default combineReducers({
  projectsForm: ProjectFormReducer,
  projects: ProjectReducer,
  auth: AuthReducer
});

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProjectFormReducer from './ProjectFormReducer';
import ProjectReducer from './ProjectReducer';

export default combineReducers({
  auth: AuthReducer,
  projectForm: ProjectFormReducer,
  projects: ProjectReducer,
});

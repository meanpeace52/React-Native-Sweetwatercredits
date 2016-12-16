import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProjectFormReducer from './ProjectFormReducer';
import ProjectReducer from './ProjectReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
  auth: AuthReducer,
  register: RegisterReducer,
  projectForm: ProjectFormReducer,
  projects: ProjectReducer,
});

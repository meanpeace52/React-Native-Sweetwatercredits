import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProjectFormReducer from './ProjectFormReducer';
import ProjectReducer from './ProjectReducer';
import ZoneFormReducer from './ZoneFormReducer';
import ZoneReducer from './ZoneReducer';
import RuleViolationFormReducer from './RuleViolationFormReducer';

export default combineReducers({
  auth: AuthReducer,
  projectForm: ProjectFormReducer,
  projects: ProjectReducer,
  zoneForm: ZoneFormReducer,
  zones: ZoneReducer,
  ruleViolationForm: RuleViolationFormReducer
});

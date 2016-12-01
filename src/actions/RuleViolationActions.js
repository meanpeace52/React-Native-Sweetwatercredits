import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { RULE_VIOLATION_UPDATE } from './types';

export const ruleViolationUpdate = ({ prop, value }) => {
  return {
    type: RULE_VIOLATION_UPDATE,
    payload: { prop, value }
  };
};

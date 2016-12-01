import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  RULE_VIOLATION_UPDATE,
  RULE_VIOLATION_CREATE } from './types';

export const ruleViolationUpdate = ({ prop, value }) => {
  return {
    type: RULE_VIOLATION_UPDATE,
    payload: { prop, value }
  };
};

export const ruleViolationCreate = ({ rule, violation, penalty, projectUid, zoneUid }) => {
  const { currentUser } = firebase.auth();
  // users/uidash34123872187/projects/dasjk2189312k/zones
  console.log(rule);
  console.log(violation);
  console.log(penalty);
  console.log(projectUid);
  console.log(zoneUid);

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/zones/${zoneUid}`)
      .push({ rule, violation, penalty, projectUid, zoneUid })
      .then(() => {
        dispatch({ type: RULE_VIOLATION_CREATE });
        Actions.pop();
        // Actions.zonesList({ projectUid, zoneUid, type: 'reset' });
      }
    );
  };
};

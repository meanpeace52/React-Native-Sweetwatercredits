import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  RULE_VIOLATION_UPDATE,
  RULE_VIOLATION_CREATE,
  RULE_VIOLATION_FETCH_SUCCESS,
  RULE_VIOLATION_SAVE_SUCCESS } from './types';

export const ruleViolationUpdate = ({ prop, value }) => {
  return {
    type: RULE_VIOLATION_UPDATE,
    payload: { prop, value }
  };
};

export const ruleViolationCreate = ({
  rule,
  violation,
  zoneType,
  penalty,
  projectUid,
  zoneUid
}) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
      .ref(`users/${currentUser.uid}/projects/${projectUid}/zones/${zoneUid}/ruleViolations`)
      .push({ rule, violation, zoneType, penalty, projectUid, zoneUid })
      .then(() => {
        dispatch({ type: RULE_VIOLATION_CREATE });
        Actions.pop();
      }
    );
  };
};

export const ruleViolationsFetch = ({ projectUid, zoneUid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
      .ref(`users/${currentUser.uid}/projects/${projectUid}/zones/${zoneUid}/ruleViolations`)
      .on('value', snapshot => {
        dispatch({ type: RULE_VIOLATION_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const ruleViolationSave = ({ rule, violation, zoneType, penalty, projectUid, zoneUid, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database()
      .ref(`/users/${currentUser.uid}/projects/${projectUid}/zones/${zoneUid}/ruleViolations/${uid}`)
      .set({ rule, violation, zoneType, penalty })
      .then(() => {
          dispatch({ type: RULE_VIOLATION_SAVE_SUCCESS });
          Actions.pop();
      });
  };
};

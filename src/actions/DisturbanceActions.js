import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DISTURBANCE_CREATE,
  DISTURBANCE_UPDATE,
  DISTURBANCE_FETCH_SUCCESS,
  DISTURBANCE_NEW } from './types';

export const disturbanceUpdate = ({ prop, value }) => {
  return {
    type: DISTURBANCE_UPDATE,
    payload: { prop, value }
  };
};

export const disturbanceCreate = ({
  projectUid,
  acreage,
  zoneType,
  ruleViolation,
  vulnerableLocation,
  penaltyAmount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
          firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/disturbances`)
          .push({
            projectUid,
            acreage,
            zoneType,
            ruleViolation,
            vulnerableLocation,
            penaltyAmount })
         .then(() => {
           dispatch({ type: DISTURBANCE_CREATE });
          //  TODO: go to the disturbance
          Actions.pop({ popNum: 2 });
         }
       );
    };
};

export const disturbancesFetch = ({ projectUid }) => {
  // Asynchronous action - > redux-thunk
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/disturbances/`)
      .on('value', snapshot => {
        dispatch({ type: DISTURBANCE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const disturbanceDelete = ({ projectUid, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/projects/${projectUid}/disturbances/${uid}`)
      .remove()
      .then(() => {
        Actions.pop();
      });
  };
};

export const disturbanceNew = ({ project }) => {
  return (dispatch) => {
    dispatch({ type: DISTURBANCE_NEW });
    Actions.disturbanceCreate({ project });
  };
};

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ZONE_UPDATE,
  ZONE_CREATE,
  ZONE_FETCH_SUCCESS,
  ZONE_SAVE_SUCCESS } from './types';

export const zoneUpdate = ({ prop, value }) => {
  return {
    type: ZONE_UPDATE,
    payload: { prop, value }
  };
};

export const zoneCreate = ({ acreage, zoneType, projectUid }) => {
  const { currentUser } = firebase.auth();
  // users/uidash34123872187/projects/dasjk2189312k/zones
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/zones`)
      .push({ acreage, zoneType, projectUid })
      .then(() => {
        dispatch({ type: ZONE_CREATE });
        Actions.zonesList({ projectUid, type: 'reset' });
      }
    );
  };
};

export const zonesFetch = ({ projectUid }) => {
  // Asynchronous action - > redux-thunk
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/zones`)
      .on('value', snapshot => {
        dispatch({ type: ZONE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const zoneSave = ({ acreage, zoneType, uid, zone_uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/projects/${uid}/zones/${zone_uid}`)
      .set({ acreage, zoneType })
      .then(() => {
          dispatch({ type: ZONE_SAVE_SUCCESS });
          Actions.zonesList({ project_uid: uid, type: 'reset' });
      });
  };
};

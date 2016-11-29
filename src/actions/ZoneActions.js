import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ZONE_UPDATE,
  ZONE_CREATE,
  ZONE_FETCH_SUCCESS } from './types';

export const zoneUpdate = ({ prop, value }) => {
  return {
    type: ZONE_UPDATE,
    payload: { prop, value }
  };
};

export const zoneCreate = ({ acreage, zoneType, uid }) => {
  const { currentUser } = firebase.auth();
  // users/uidash34123872187/projects/dasjk2189312k/zones
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${uid}/zones`)
      .push({ acreage, zoneType })
      .then(() => {
        dispatch({ type: ZONE_CREATE });
        Actions.zonesList({ project_uid: uid, type: 'reset' });
      }
    );
  };
};

export const zonesFetch = ({ uid }) => {
  // Asynchronous action - > redux-thunk
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects/${uid}/zones`)
      .on('value', snapshot => {
        dispatch({ type: ZONE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

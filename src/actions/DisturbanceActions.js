import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DISTURBANCE_CREATE,
  DISTURBANCE_UPDATE,
  DISTURBANCE_FETCH_SUCCESS,
  DISTURBANCE_NEW,
  DISTURBANCE_ZONE_TYPE_UPDATE,
  DISTURBANCE_VIOLATION_UPDATE,
  DISTURBANCE_ACREAGE_UPDATE
} from './types';

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
  debitAmount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
          firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/disturbances`)
          .push({
            projectUid,
            acreage,
            zoneType,
            ruleViolation,
            vulnerableLocation,
            debitAmount })
         .then(() => {
           dispatch({ type: DISTURBANCE_CREATE });
           Actions.pop({ popNum: 4 });
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

// Below Actions are directly related to the multipart form for disturbances
export const disturbanceNew = ({ project }) => {
  return (dispatch) => {
    dispatch({ type: DISTURBANCE_NEW });
    Actions.disturbanceZoneType({ project });
  };
};

export const disturbanceZoneTypeUpdate = ({ zoneType, project }) => {
  return (dispatch) => {
    dispatch({
      type: DISTURBANCE_ZONE_TYPE_UPDATE,
      payload: zoneType
    });

    Actions.disturbanceViolation({ project });
  };
};

export const disturbanceViolationUpdate = ({ zoneType, ruleViolation, project }) => {
  return (dispatch) => {
    dispatch({
      type: DISTURBANCE_VIOLATION_UPDATE,
      payload: {
        zoneType,
        ruleViolation
      }
    });


    Actions.disturbanceAcreage({ project });
  };
};

export const disturbanceAcreageUpdate = ({ zoneType, ruleViolation, acreage, project }) => {
  return (dispatch) => {
    dispatch({
      type: DISTURBANCE_ACREAGE_UPDATE,
      payload: {
        zoneType,
        ruleViolation,
        acreage
      }
    });

    Actions.disturbanceLocation({ project });
  };
};

// this is a special create designed to work around the UI and accompnaying logic
// of creating a tls or short-term disturbance
export const disturbanceTlsCreate = ({
  projectUid,
  acreage,
  zoneType,
  ruleViolation,
  vulnerableLocation,
  debitAmount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
          firebase.database().ref(`users/${currentUser.uid}/projects/${projectUid}/disturbances`)
          .push({
            projectUid,
            acreage,
            zoneType,
            ruleViolation,
            vulnerableLocation,
            debitAmount })
         .then(() => {
           dispatch({ type: DISTURBANCE_CREATE });
           Actions.pop({ popNum: 2 });
         }
       );
    };
  };

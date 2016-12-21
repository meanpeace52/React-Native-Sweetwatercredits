import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';
import { DISTURBANCE_CREATE, DISTURBANCE_UPDATE, DISTURBANCE_FETCH_SUCCESS } from './types';

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
    console.log(projectUid);
    console.log(acreage);
    console.log(zoneType);
    console.log(ruleViolation);
    console.log(vulnerableLocation);
    console.log(penaltyAmount);
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

          // TODO: Not this lol
          Actions.pop();
          Actions.pop();
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
        console.log(snapshot.val());
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

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { DISTURBANCE_CREATE, DISTURBANCE_UPDATE } from './types';

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
          firebase.database().ref(`users/${currentUser.uid}/disturbances`)
          .push({
            projectUid,
            acreage,
            zoneType,
            ruleViolation,
            vulnerableLocation,
            penaltyAmount
          })
         .then(() => {
           dispatch({ type: DISTURBANCE_CREATE });
          //  go to the disturbance
          Actions.disturbancesList({ type: 'reset' });
         }
       );
    };
};

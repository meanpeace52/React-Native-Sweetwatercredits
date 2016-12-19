import firebase from 'firebase';
import { DISTURBANCE_CREATE, DISTURBANCE_UPDATE } from './types';

export const disturbanceUpdate = ({ prop, value }) => {
  return {
    type: DISTURBANCE_UPDATE,
    payload: { prop, value }
  };
};

export const disturbanceCreate = ({
  project,
  acreage,
  zoneType,
  primaryRuleViolation,
  secondaryRuleViolation,
  penaltyAmount }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
          firebase.database().ref(`users/${currentUser.uid}/disturbances`)
          .push({ project,
          acreage,
          zoneType,
          primaryRuleViolation,
          secondaryRuleViolation,
          penaltyAmount })
         .then(() => {
           dispatch({ type: DISTURBANCE_CREATE });
          //  go to the disturbance
          //  Actions.projectsList({ type: 'reset' });
         }
       );
    };
};

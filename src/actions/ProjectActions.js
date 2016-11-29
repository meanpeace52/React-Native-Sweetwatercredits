import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROJECT_UPDATE,
  PROJECT_CREATE,
  PROJECT_FETCH_SUCCESS } from './types';

export const projectUpdate = ({ prop, value }) => {
  return {
    type: PROJECT_UPDATE,
    payload: { prop, value }
  };
};

export const projectCreate = ({ name }) => {
  const { currentUser } = firebase.auth();
  // users/uidash34123872187/projects
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects`)
      .push({ name })
      .then(() => {
        dispatch({ type: PROJECT_CREATE });
        Actions.projectsList({ type: 'reset' });
      }
    );
  };
};


export const projectsFetch = () => {
  // Asynchronous action - > redux-thunk
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/projects`)
      .on('value', snapshot => {
        dispatch({ type: PROJECT_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

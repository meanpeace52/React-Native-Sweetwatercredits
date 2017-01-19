import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROJECT_UPDATE,
  PROJECT_CREATE,
  PROJECT_FETCH_SUCCESS,
  PROJECT_SAVE_SUCCESS,
  PROJECT_NEW } from './types';

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

export const projectSave = ({ name, uid, disturbances }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/projects/${uid}`)
      .set({ name, disturbances })
      .then(() => {
          dispatch({ type: PROJECT_SAVE_SUCCESS });
          Actions.projectsList({ type: 'reset' });
      });
  };
};

export const projectDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/projects/${uid}`)
      .remove()
      .then(() => {
        Actions.projectsList({ type: 'reset' });
      });
  };
};

export const projectNew = () => {
  return (dispatch) => {
    dispatch({ type: PROJECT_NEW });
    Actions.projectCreate();
  };
};

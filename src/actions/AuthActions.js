import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  AUTH_FIELD_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  NAVIGATE_TO_PASSWORD_RESET,
  PASSWORD_RESET_EMAIL_SENT,
  PASSWORD_RESET_EMAIL_ERROR } from './types';

export const authFieldUpdate = ({ prop, value }) => {
  return {
    type: AUTH_FIELD_UPDATE,
    payload: { prop, value }
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => {
      const errorMessage = error.message;
      loginUserFail(dispatch, errorMessage);
    });
  };
};

export const checkIfLoggedIn = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        loginUserSuccess(dispatch, user);
      } else {
        Actions.loginForm();
      }
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => {
        logoutUserSuccess(dispatch);
    }).catch(error => {
      const errorMessage = error.message;
      logoutUserFail(dispatch, errorMessage);
    });
  };
};

export const navigateToPasswordReset = () => {
  return (dispatch) => {
    dispatch({ type: NAVIGATE_TO_PASSWORD_RESET });
    Actions.passwordReset();
  };
};

export const sendPasswordResetEmail = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // get the loading animation

    firebase.auth().sendPasswordResetEmail(email).then(() => {
      passwordResetEmailSent(dispatch);
    }).catch(error => {
      console.log('caught error');
      const errorMessage = error.message;
      passwordResetEmailError(dispatch, errorMessage);
    });
  };
};

// Helper Methods Below vvvvvv
// Deal with dispatching login_user_success
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
   });

  Actions.projects();
};

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
   });

   Actions.root({ type: 'reset' });
};

const logoutUserFail = (dispatch, error) => {
  dispatch({
    type: LOGOUT_USER_FAIL,
    payload: error
  });
};

const passwordResetEmailSent = (dispatch) => {
  dispatch({
    type: PASSWORD_RESET_EMAIL_SENT
  });

  Actions.pop();
};

const passwordResetEmailError = (dispatch, error) => {
  dispatch({
    type: PASSWORD_RESET_EMAIL_ERROR,
    payload: error
  });
};

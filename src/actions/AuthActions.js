import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  AUTH_FIELD_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  NAVIGATE_TO_AUTH_UPDATE_FORM,
  PASSWORD_RESET_EMAIL_SENT,
  PASSWORD_RESET_EMAIL_ERROR,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_CREDENTIAL_FAIL } from './types';

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
        Actions.login();
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
    dispatch({ type: NAVIGATE_TO_AUTH_UPDATE_FORM });
    Actions.passwordReset();
  };
};

export const navigateToEmailReset = () => {
  return (dispatch) => {
    dispatch({ type: NAVIGATE_TO_AUTH_UPDATE_FORM });
    Actions.emailReset();
  };
};

export const sendPasswordResetEmail = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER }); // get the loading animation

    firebase.auth().sendPasswordResetEmail(email).then(() => {
      passwordResetEmailSent(dispatch);
    }).catch(error => {
      const errorMessage = error.message;
      passwordResetEmailError(dispatch, errorMessage);
    });
  };
};

export const updatePassword = ({ password, newPassword }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const { currentUser } = firebase.auth();

    // grab user credential
    const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email,
    password);

    // reauthenticate using the credential
    currentUser.reauthenticate(credential)
    .then(() => {
      // update the users password
      currentUser.updatePassword(newPassword)
      .then(() => {
        updatePasswordSuccess(dispatch);
      })
      .catch(error => {
        const errorMessage = error.message;
        updateCredentialFail(dispatch, errorMessage);
      });
    })
    .catch(error => {
      const errorMessage = error.message;
      updateCredentialFail(dispatch, errorMessage);
    });
  };
};

export const updateEmail = ({ password, newEmail }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    const { currentUser } = firebase.auth();

    // grab user credential
    const credential = firebase.auth.EmailAuthProvider.credential(currentUser.email,
    password);

    currentUser.reauthenticate(credential)
    .then(() => {
      currentUser.updateEmail(newEmail).then(() => {
        updateEmailSuccess(dispatch);
      }).catch(error => {
        const errorMessage = error.message;
        updateCredentialFail(dispatch, errorMessage);
      });
    }).catch(error => {
      const errorMessage = error.message;
      updateCredentialFail(dispatch, errorMessage);
    });
  };
};

// Helper Methods - Dispatch Actions to Reducers
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

const updatePasswordSuccess = (dispatch) => {
  dispatch({
    type: UPDATE_PASSWORD_SUCCESS
  });
};

const updateEmailSuccess = (dispatch) => {
  dispatch({
    type: UPDATE_EMAIL_SUCCESS
  });
};

const updateCredentialFail = (dispatch, error) => {
  dispatch({
    type: UPDATE_CREDENTIAL_FAIL,
    payload: error
  });
};

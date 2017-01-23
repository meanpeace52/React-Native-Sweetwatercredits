import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  REGISTER_FIELD_UPDATE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL } from './types';

export const registerFieldUpdate = ({ prop, value }) => {
  return {
    type: REGISTER_FIELD_UPDATE,
    payload: { prop, value }
  };
};

export const registerUser = ({ email, password, passwordConfirmation }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER }); // this sets loading flag to true and renders spinner

    if (password !== passwordConfirmation) {
      const error = 'Password and Password Confirmation do not match.';
      registerUserFail(dispatch, error);
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        registerUserSuccess(dispatch, user);
      })
      .catch(error => {
        const errorMessage = error.message;
        registerUserFail(dispatch, errorMessage);
      });
    }
  };
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
   });

   Actions.projects();
};

const registerUserFail = (dispatch, error) => {
  dispatch({
    type: REGISTER_USER_FAIL,
    payload: error
  });
};

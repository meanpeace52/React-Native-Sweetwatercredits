import { Actions } from 'react-native-router-flux';
import { PROJECT_UPDATE, PROJECT_CREATE, PROJECTS_FETCH } from './types';

export const updateProject = ({ prop, value }) => {
  return {
    type: PROJECT_UPDATE,
    payload: { prop, value }
  };
};

export const projectCreate = () => {
  return (dispatch) => {
    // this is a promise
    // functionName.then(() => doSomethingHere());
    // console.log(name);
    dispatch({ type: PROJECT_CREATE });
    Actions.projectsList();
  };
};

export const projectsFetch = () => {
  return (dispatch) => {
    dispatch({ type: PROJECTS_FETCH });
  };
};

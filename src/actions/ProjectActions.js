import { PROJECT_UPDATE, PROJECT_CREATE, PROJECTS_FETCH } from './types';
import { Actions } from 'react-native-router-flux';

export const updateProject = ({ prop, value }) => {
  return {
    type: PROJECT_UPDATE,
    payload: { prop, value }
  };
};

export const projectCreate = ({ name }) => {
  return (dispatch) =>  {
    // this is a promise
    // functionName.then(() => doSomethingHere());
    // console.log(name);
    dispatch({ type: PROJECT_CREATE });
    Actions.projectsList({ type: 'reset' });
  };
};

export const projectsFetch = () => {
  return (dispatch) => {
    dispatch({ type: PROJECTS_FETCH  });
  };
};

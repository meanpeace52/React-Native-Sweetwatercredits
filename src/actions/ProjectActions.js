import { UPDATE_PROJECT } from './types';

export const updateProject = ({ prop, value }) => {
  return {
    type: UPDATE_PROJECT,
    payload: { prop, value }
  };
};


// Below can update any key:value prop pair
// export const employeeUpdate = ({ prop, value }) => {
//   return {
//     type: EMPLOYEE_UPDATE,
//     payload: { prop, value }
//   };
// };

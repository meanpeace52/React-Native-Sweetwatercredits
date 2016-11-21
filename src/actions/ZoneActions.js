import { UPDATE_ZONE } from './types';

export const updateZone = ({ prop, value }) => {
  return {
    type: UPDATE_ZONE,
    payload: { prop, value }
  };
};

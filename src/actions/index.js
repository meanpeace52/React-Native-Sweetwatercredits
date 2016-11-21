import { ADD_ZONE } from './types'

export const addZone = (acreage, zoneType) => {
  return {
    type: ADD_ZONE,
    acreage,
    zoneType
  };
};

'use strict'

export function addZone (acreage, zoneType) {
  console.log('actionCreator: dispatching add zone!')
  return {
    type: 'ADD_ZONE',
    acreage,
    zoneType
  }
}

export function removeZone (i) {
  return {
    type: 'REMOVE_ZONE',
    i
  }
}

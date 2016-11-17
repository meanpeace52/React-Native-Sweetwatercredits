'use strict'

const initialState = {
  acreage: 0,
  zoneId: 0,
  zoneType: 'none'
}

function postZone (state = initialState, action) {
  switch (action.type) {
    case 'ADD_ZONE' :
      console.log('Adding Zone!')
      return [ ...state, {
        zoneId: state.zoneId + 1,
        acreage: action.acreage,
        zoneType: action.zoneType
      }
      ]
    case 'REMOVE_ZONE' :
      console.log('Removing Zone')
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]

    default :
      return state
  }
}

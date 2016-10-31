'use strict'

function addProject (state = [], action) {
  console.log('Adding Project!')
  switch (action.type) {
    case 'ADD_PROJECT' :
      //return shit here
      console.log(state)
      return state
    default :
      return state
  }
}

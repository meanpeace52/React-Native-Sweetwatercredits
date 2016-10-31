'use strict'

// export function addZone (projectId, numAcres, rule, index) {
//   return {
//     type: 'ADD_ZONE',
//     projectId,
//     numAcres,
//     rule,
//     index
//   }
// }

// export function removeZone (projectId, index) {
//   return {
//     type: 'REMOVE_ZONE',
//     projectId,
//     index
//   }
// }

// Double check this store as well
export function addProject (projectId, index) {
  return {
    type: 'ADD_PROJECT',
    projectId,
    index
  }
}

// export function removeProject (projectId, index) {
//   return {
//     type: 'REMOVE_PROJECT',
//     projectId,
//     index
//   }
// }

// // Double check this store as well
// export function storeToken (token) {
//   return {
//     type: 'STORE_TOKEN',
//     token
//   }
// }

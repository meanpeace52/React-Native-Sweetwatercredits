'use strict'

import { createStore, compose } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

// Import the root reducer
import rootReducer from './reducers/index'

// Prexisting Data
// import comments from './data/comments'
// import posts from './data/posts'

// Create an object for the default data
const defaultState = {
  
}

const store = createStore(rootReducer, defaultState)
export const history = syncHistoryWithStore(browserHistory, store)

export default store

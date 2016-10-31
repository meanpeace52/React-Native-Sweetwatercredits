'use strict'

import { combineReducers } from 'redux'
import { reducer } from 'react-native-router-flux'

// import posts from './posts'
// import comments from './comments'

// Need to combine the reducers here. Data should be brought in in each file required above
const rootReducer = combineReducers({ posts, comments, routing: reducer })

export default rootReducer

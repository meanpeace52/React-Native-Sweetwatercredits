'use strict'

import { combineReducers } from 'redux'

// Reducers
import routes from './routes'
import zones from './zones'

// Need to combine the reducers here. Data should be brought in in each file required above
const rootReducer = combineReducers({
  routes,
  zones
  // other reducers right chea
})

export default rootReducer

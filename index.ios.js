'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

// Import React Native Router Flux
import { Router, Scene } from 'react-native-router-flux'
import { connect, Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

const RouterWithRedux = connect()(Router)
import reducers from './app/reducers'

// Import Screens
import Splash from './app/screens/Splash'
import Login from './app/screens/Login'
import Projects from './app/screens/Projects'
import Zones from './app/screens/Zones'
import RuleViolations from './app/screens/RuleViolations'

// Create Store
const middleware = [] // thunk/saga/wahtev for API
const store = compose(applyMiddleware(...middleware))(createStore)(reducers)

class sweetwaterCredits extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux >
          <Scene key='root'>
            <Scene key='splash' component={Splash} initial={true} hideNavBar={true} />
            <Scene key='login' component={Login} title='Login' hideNavBar={false} />
            <Scene key='projects' component={Projects} title='Projects' hideNavBar={false} />
            <Scene key='zones' component={Zones} title='Zones' hideNavBar={false} />
            <Scene key='ruleViolations' component={RuleViolations} title='Rule Violations' hideNavBar={false} />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('sweetwaterCredits', () => sweetwaterCredits)

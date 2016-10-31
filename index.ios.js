'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

// Import React Native Router Flux
import { Router, Scene } from 'react-native-router-flux'

// Import Redux Stuff
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware, combineReuces, compose } from 'redux'

// Import Screens
import Login from './app/screens/Login'
import Projects from './app/screens/Projects'
import NewProjects from './app/screens/NewProjects'

class sweetwaterCredits extends Component {
  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='login' component={Login} initial={true} hideNavBar={true} />
          <Scene key='projects' component={Projects} title='Projects' hideNavBar={false} />
          <Scene key='new' component={NewProjects} title='New Projects' hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('sweetwaterCredits', () => sweetwaterCredits)

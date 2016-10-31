'use strict'

import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'

import Root from './app/screens/Root'
import SignIn from './app/screens/SignIn'
import Register from './app/screens/Register'
import Home from './app/screens/Home'
import Project from './app/screens/Project.ios'
import About from './app/screens/About.ios'

class sweetwaterCredits extends Component {
  renderScene (route, navigator) {
    console.log(route)
    if (route.name === 'root') {
      return <Root navigator={navigator} />
    }
    if (route.name === 'signin') {
      return <SignIn navigator={navigator} />
    }
    if (route.name === 'register') {
      return <Register navigator={navigator} />
    }
    if (route.name === 'home') {
      return <Home navigator={navigator} />
    }
    if (route.name === 'project') {
      return <Project navigator={navigator} />
    }
    if (route.name === 'about') {
      return <About navigator={navigator} />
    }
  }

  render () {
    return (
      <Navigator
       initialRoute={{ title: 'My Initial Scene', name: 'root' }}
       renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

AppRegistry.registerComponent('sweetwaterCredits', () => sweetwaterCredits)

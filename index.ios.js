'use strict'

import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'

import Root from './app/screens/Root'
import SignIn from './app/screens/SignIn'
import Register from './app/screens/Register'
import Home from './app/screens/Home'

class sweetwaterCredits extends Component {
  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'root') {
      return <Root navigator={navigator} />
    }
    if(route.name == 'signin') {
      return <SignIn navigator={navigator} />
    }
    if(route.name == 'register') {
      return <Register navigator={navigator} />
    }
    if(route.name == 'home') {
      return <Home navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
       initialRoute={{ name: 'root' }}
       renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('sweetwaterCredits', () => sweetwaterCredits)

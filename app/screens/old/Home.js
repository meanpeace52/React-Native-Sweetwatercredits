'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Packages
import * as _ from 'lodash'

// Custom Components
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Home extends Component {
  _navigate (routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View style={styles.ImageContainer}>
          <Image
          style={styles.SplashImage}
          source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
        </View>

        <TouchableHighlight
        style={styles.button}
        onPress={ () => this._navigate('project') }>
          <Text style={styles.buttonText}>
            New Project
          </Text>
        </TouchableHighlight>

        <Text style={styles.contentText}>
          {_.upperCase('Note')}
          : Registration is not required to use our calculator, but it is helpful to save your progress, edit previous calculations, and share results with colleagues.
        </Text>

        <TouchableHighlight
        style={styles.bottomButton}
        onPress={ () => this._navigate('signin') }>
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={styles.bottomButton}
        onPress={ () => this._navigate('register') }>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
        style={styles.bottomButton}
        onPress={ () => this._navigate('about') }>
          <Text style={styles.buttonText}>
            About
          </Text>
        </TouchableHighlight>

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    width: 325,
    height: 40
  },
  bottomButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    width: 325,
    height: 40,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    marginTop: 7
  },
  ImageContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 40
  },
  projectTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 46
  },
  SplashImage: {
    width: 150,
    height: 92
  },
  contentText: {
    marginTop: 25,
    marginBottom: 25,
    marginRight: 25,
    marginLeft: 25,
    fontSize: 24
  }
})

module.exports = Home

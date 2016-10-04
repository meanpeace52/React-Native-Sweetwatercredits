'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Home extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View style={styles.ImageContainer}>
          <Image
          style={styles.SplashImage}
          source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
        </View>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            New Calculation
          </Text>
        </TouchableHighlight>

        <Text style={styles.projectTitle}>
          Recent Projects
        </Text>

        <TouchableHighlight style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>
            First Time?
          </Text>
        </TouchableHighlight>
      </ViewContainer>
    )
  }
}


const styles = StyleSheet.create({
  bottomButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose'
  },
  bottomButtonText: {
    color: 'dodgerblue',
    textDecorationLine: 'underline',
    fontSize: 16
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    width: 325,
    height: 40,
    marginTop: 30,
    marginBottom: 30
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
  }
})
module.exports = Home

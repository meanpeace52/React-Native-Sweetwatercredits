'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Root extends Component {
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground/>
        <View style={styles.ImageContainer}>
          <Image
          style={styles.SplashImage}
          source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
        </View>

        <Text style={styles.IntroText}>
          The Sweetwater River Conservancy (SRC) is made up of 638,000 acres of contiguous Wyoming landscape that is actively managed in perpetuity for Sage-grouse, mule deer, cattle, elk, antelope and other native plant and obligate species.
        </Text>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Calculate Credits
          </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.navigate.bind(this, 'signin')} style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>
            Sign In/Register
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>
          How This App Works
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
    backgroundColor: 'mistyrose',
    marginTop: 20
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
    marginTop: 50,
    marginBottom: 30
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    marginTop: 7
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginRight: 20,
    marginBottom: 40
  },
  IntroText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25
  },
  SplashImage: {
    width: 300,
    height: 184
  }
})

module.exports = Root

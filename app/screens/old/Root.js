'use strict'

import React, { Component, PropTypes } from 'react'
import { Image, NavigatorIOS, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Root extends Component {
  _navigate (routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground/>

        <View
          style={styles.ImageContainer}>
          <Image
            style={styles.SplashImage}
            source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
        </View>

        <Text
          style={styles.IntroText}>
          The Sweetwater River Conservancy (SRC) is made up of 638,000 acres of contiguous Wyoming landscape that is actively managed in perpetuity for Sage-grouse, mule deer, cattle, elk, antelope and other native plant and obligate species.
        </Text>

        <TouchableHighlight
          style={styles.button}
          onPress={ () => this._navigate('home') }>
          <Text
            style={styles.buttonText}>
            Calculate Credits
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.bottomButton}>
          <Text
            style={styles.bottomButtonText}>
            Sign In/Register
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.bottomButton}>
          <Text
            style={styles.bottomButtonText}>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10
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
  },
  TopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  }
})

module.exports = Root

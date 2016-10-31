'use strict'

import React, { Component } from 'react'
import { Image, Text, StyleSheet, TouchableHighlight, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

// Vendor Packages
import _ from 'lodash'

// Custom Components
import SplashContainer from '../components/SplashContainer'

class Login extends Component {
  render () {
    const navigateToProjects = () => Actions.projects()
    const navigateToLogin = () => Actions.login()
    return (
      <SplashContainer>
        <View style={styles.main}>
          <Image source={require('../assets/images/logo-impression.png')}
            style={styles.logo} />

          <Text style={styles.underLogoText}>
            Greater Sage-Grouse Credit Calculator
          </Text>

          <TouchableHighlight
            style={styles.buttonBig}
              onPress={navigateToProjects}>
            <Text style={styles.buttonBigText}>
              {_.upperCase('Start Calculating Credits')}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonSmall}
            onPress={navigateToLogin}>
            <Text style={styles.buttonSmallText}>
              {_.upperCase('Sign In Or Register')}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonSmall}>
            <Text style={styles.buttonSmallText}>
              {_.upperCase('How This App Works')}
            </Text>
          </TouchableHighlight>

        </View>
      </SplashContainer>
    )
  }
}

const styles = StyleSheet.create({
  buttonBig: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 300
  },
  buttonBigText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400'
  },
  buttonSmall: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 220
  },
  buttonSmallText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center'
  },
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 200
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  underLogoText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6
  },
  viewText: {
    marginTop: 70
  }
})

module.exports = Login

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    height: 44,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center'
  },
  buttonBigText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400'
  },
  buttonSmall: {
    backgroundColor: '#FFC107',
    marginTop: 10,
    marginBottom: 10,
    width: 220,
    height: 36,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSmallText: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  },
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    flex: 1,
    marginTop: 200,
    marginRight: 25,
    marginLeft: 25
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  underLogoText: {
    fontSize: 28,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6
  },
  viewText: {
    marginTop: 70
  }
})

module.exports = Login

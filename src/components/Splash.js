'use strict'

import React, { Component } from 'react'
import { Image, Text, StyleSheet, TouchableHighlight, View } from 'react-native'

// Vendor Packages
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

// Custom Components
import SplashContainer from '../components/SplashContainer'

class Splash extends Component {
  render () {
    const navigateToProjects = () => Actions.projects()
    const navigateToLogin = () => Actions.login()
    const navigateToZones = () => Actions.zones()
    return (
      <SplashContainer>
        <View style={styles.main}>
          <Image
            source={require('../assets/images/logo-impression.png')}
            style={styles.logo} />

          <Text style={styles.underLogoText}>
            Greater Sage-Grouse Credit Calculator
          </Text>

          <TouchableHighlight
            style={styles.buttonBlue}
            onPress={navigateToProjects}>
            <Text style={styles.buttonBlueText}>
              {_.upperCase('Start Calculating Credits')}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonYellow}
            onPress={navigateToLogin}>
            <Text style={styles.buttonYellowText}>
              {_.upperCase('Sign In Or Register')}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonYellow}
            onPress={navigateToZones}>
            <Text style={styles.buttonYellowText}>
              {_.upperCase('How This App Works')}
            </Text>
          </TouchableHighlight>

        </View>
      </SplashContainer>
    )
  }
}

const styles = StyleSheet.create({
  
  buttonYellow: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    borderRadius: 2,
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 220
  },
  buttonYellowText: {
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

export default connect(({routes}) => ({routes}))(Splash)

'use strict'

import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Imports
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

// Custom Components
import ViewContainer from '../components/ViewContainer'
import LoginForm from '../components/LoginForm'

class Login extends Component {
  render () {
    const navigateToProjects = () => Actions.projects()
    return (
      <ViewContainer style={styles.main}>
        <LoginForm/>
        <View>
          {/* <hr> *facepalm */}
          <View style={styles.hrTopView}/>
          <View style={styles.hrBottomView}/>
          {/* END <hr> *facepalm */}

          <Text style={styles.bottomText}>
            Registration is required to save, edit, and share calculations. Use the button below to use calculator without registering.
          </Text>
          <TouchableHighlight
            style={styles.buttonBlue}
            onPress={navigateToProjects}>
            <Text style={styles.buttonBlueText}>
              {_.upperCase('Calculate Credits')}
            </Text>
          </TouchableHighlight>
        </View>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  bottomText: {
    margin: 10,
    marginLeft: 25,
    marginRight: 25
  },
  buttonBlue: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 200
  },
  buttonBlueText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400'
  },
  hrBottomView: {
    borderTopColor: 'gainsboro',
    borderTopWidth: 1,
    marginBottom: 20
  },
  hrTopView: {
    marginBottom: 20
  },
  main: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 75
  }
})

module.exports = Login

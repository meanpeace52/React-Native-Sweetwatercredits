'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

// Vendor Imports
import _ from 'lodash'

class LoginForm extends Component {
  render () {
    return (
        <View>
          <Image style={styles.logo} source={require('../assets/images/sweetwater-conservancy-logo.png')} />

          {/* Login Form */}
          <View style={styles.loginInput}>
            <TouchableHighlight>
              <TextInput
                style={styles.inputView}
                placeholder='Email' />
            </TouchableHighlight>
          </View>

          <View style={styles.loginInput}>
            <TouchableHighlight>
              <TextInput
                style={styles.inputView}
                placeholder='Password'
                secureTextEntry/>
            </TouchableHighlight>
          </View>

          <TouchableHighlight>
            <Text style={styles.forgotText}>
              forgot password?
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonBig}>
            <Text style={styles.buttonBigText}>
              {_.upperCase('Sign In')}
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.buttonSmall}>
            <Text style={styles.buttonSmallText}>
              {_.upperCase('New') + '?'}
            </Text>
          </TouchableHighlight>
          {/* End Login Form */}
        </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonBig: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 125
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
    borderRadius: 2,
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 94
  },
  buttonSmallText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center'
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: 'gray',
    fontFamily: 'Helvetica',
    fontSize: 12,
    marginBottom: 20
  },
  inputView: {
    height: 30,
    width: 300
  },
  loginInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10
  },
  logo: {
    alignSelf: 'center',
    height: 96,
    marginBottom: 40,
    marginTop: 20,
    width: 166
  }
})

module.exports = LoginForm

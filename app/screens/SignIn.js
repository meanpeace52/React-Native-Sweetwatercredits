'use strict'


import React, { Component } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class SignIn extends Component {
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

        <TextInput
          onChangeText={ (text) => this.setState({email: text})}
          style={styles.input}
          placeholder="Email Address">
        </TextInput>

        <TextInput
          onChangeText={ (text) => this.setState({password: text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}>
        </TextInput>

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableHighlight>




        <View style={styles.buttonRow}>
          <TouchableHighlight onPress={this.navigate.bind(this, 'register')} style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>
              I'm New Here
            </Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>
              Home
            </Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.IntroText}>
          Registration is not required to use our calculator, but it is helpful to save your progrss, edit previous calculations, and share results with colleagues.
        </Text>

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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 25,
    marginLeft: 25,
    paddingTop: 30,
    paddingBottom: 20
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'mistyrose',
    width: 325,
    height: 40,
    marginTop: 30
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
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 25,
    marginRight:  25,
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
  }
})

module.exports = SignIn

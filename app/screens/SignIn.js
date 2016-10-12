'use strict'

import React, { Component } from 'react'
import { Image, Modal, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class SignIn extends Component {
  constructor (props) {
    super(props)
    this.state = {modalVisible: false}
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }

  navigate (routeName) {
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
          onPress={ () => { this.setModalVisible(true) } }
          style={styles.button}
          >
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableHighlight>

        <Text style={styles.IntroText}>
          Registration is not required to use our calculator, but it is helpful to save your progrss, edit previous calculations, and share results with colleagues.
        </Text>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={ () => { alert('Modal has been closed.') } }
          >
          <StatusBarBackground style={{backgroundColor: 'white'}}/>
          <View style={styles.TopRow}>
            <TouchableHighlight
              onPress={ () => { this.setModalVisible(!this.state.modalVisible) } }
              >
              <Text style={styles.CancelButton}>
                Cancel
              </Text>
            </TouchableHighlight>
          </View>
          <ViewContainer>
          <View style={styles.ImageContainer}>
            <Image
            style={styles.SplashImage}
            source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
          </View>

          <TextInput
            onChangeText={ (text) => this.setState({email: text})}
            style={styles.input}
            placeholder='Email Address' />

          <TextInput
            onChangeText={ (text) => this.setState({password: text})}
            style={styles.input}
            placeholder='Password'
            secureTextEntry />

          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableHighlight>

          </ViewContainer>
        </Modal>
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
    marginTop: 25
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    marginTop: 7
  },
  CancelButton: {
    fontSize: 16,
    marginLeft: 7,
    color: 'dodgerblue'
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
    marginRight: 25,
    marginTop: 25
  },
  SplashImage: {
    width: 300,
    height: 184
  }
})

module.exports = SignIn

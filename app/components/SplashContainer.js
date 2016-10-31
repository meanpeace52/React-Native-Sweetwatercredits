'use strict'
import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

class SplashContainer extends Component {
  render () {
    return (
      <Image source={require('../assets/images/sage-bg.jpg')} style={styles.splash}>
        {this.props.children}
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  splash: {
    backgroundColor: 'transparent',
    flex: 1,
    height: undefined,
    width: undefined
  }
})

module.exports = SplashContainer

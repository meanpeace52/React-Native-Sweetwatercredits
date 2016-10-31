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
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent'
  }
})

module.exports = SplashContainer

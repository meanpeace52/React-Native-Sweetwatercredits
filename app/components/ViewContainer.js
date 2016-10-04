'use strict'
// Borrowed this neat component from Twitter User @AlwaysBCoding
// Allows super fexible control of a 'normalized' View Container that we will be
// using across most of our screens

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={[styles.ViewContainer, this.props.style || {} ]}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
})

module.exports = ViewContainer

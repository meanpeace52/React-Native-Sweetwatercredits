'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'

// Vendor Components
import Icon from 'react-native-vector-icons/MaterialIcons'

class NavDrawer extends Component {
  render () {
    return (
      <View style={styles.logoNavContainer}>
        <Image style={styles.logo} source={require('../assets/images/sweetwater-conservancy-logo.png')} />
        <TouchableHighlight>
          <Icon name='menu' color='#000' size={40} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  logo: {
    height: 92,
    width: 161
  }
})

module.exports = NavDrawer

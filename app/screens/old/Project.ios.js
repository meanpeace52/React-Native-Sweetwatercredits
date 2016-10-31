'use strict'

import React, { Component } from 'react'
import { Image, Picker, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

// Vendor Packages
import * as _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome';

// Custom Components
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Project extends Component {
  _navigate (routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  static defaultProps = {
    value: 0,
  };

  state = {
    value: this.props.value,
  };

  render () {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <View style={styles.ImageContainer}>
          <Image
          style={styles.SplashImage}
          source={require('../assets/images/sweetwater_white_logo_small.jpg')}/>
        </View>

        <View style={styles.main}>
          <Text style={styles.contentText}>
            Project Zones
          </Text>

          {
            // Added Zones should display here
          }

          <Text style={styles.listedZones}>
            Zone 1 - NUM Acres
          </Text>

          <Text style={styles.addZone}>
            Add Zone
          </Text>

          <TextInput
            onChangeText={ (text) => this.setState({email: text})}
            style={styles.input}
            placeholder='Number of Acres' />

          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="Ruby" value="ruby" />
          </Picker>

          <View style={styles.iconRow}>
            <TouchableHighlight>
              <Icon name="plus" color="#4F8EF7" size={30} />
            </TouchableHighlight>

            <TouchableHighlight>
              <Icon name="remove" color="#4F8EF7" size={30} />
            </TouchableHighlight>
          </View>

        </View>

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  addZone: {
    fontSize: 16
  },
  contentText: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 25
  },
  ImageContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginBottom: 40
  },
  main: {
    marginRight: 25,
    marginLeft: 25
  },
  SplashImage: {
    width: 150,
    height: 92
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15
  },
  iconRow: {
    marginTop: 25,
    marginRight: 70,
    marginLeft: 70,
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  listedZones: {
    fontSize: 16,
    color: 'dodgerblue',
    textDecorationLine: 'underline',
    marginBottom: 25
  }
})

module.exports = Project

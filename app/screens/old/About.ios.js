'use strict'

import React, { Component, PropTypes } from 'react'
import { Image, NavigatorIOS, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import ViewContainer from '../components/ViewContainer'

class About extends Component {

  _navigate (routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  render() {
    return (
      <ViewContainer>
        <ScrollView>
          <View style={styles.section}>
            <Image
              style={styles.sectionImage}
              source={require('../assets/images/stream.jpg')}/>
            <View style={styles.sectionText}>
              <Text style={styles.captionText}>
                Benefits for Wyoming
              </Text>
              <Text style={styles.sectionInner}>
                SRC will guarantee forever --- a significant piece of Wyoming rangeland will remain as open space.  As we work together to improve and preserve both the sagebrush habitat, as well as the river and wetland areas on the ranches, conservation and environmental stewardship will benefit all species that call the Pathfinder Ranches home.
              </Text>
            </View>
          </View>

          <View style={styles.section}>
            <Image
              style={styles.sectionImage}
              source={require('../assets/images/stream.jpg')}/>
            <View style={styles.sectionText}>
              <Text style={styles.captionText}>
                Benefits for Business
              </Text>
              <Text style={styles.sectionInner}>
                SRC will guarantee forever --- a significant piece of Wyoming rangeland will remain as open space.  As we work together to improve and preserve both the sagebrush habitat, as well as the river and wetland areas on the ranches, conservation and environmental stewardship will benefit all species that call the Pathfinder Ranches home.
              </Text>
            </View>
          </View>
        </ScrollView>


      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  captionText: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  section: {
    marginTop: 20,
    marginRight: 25,
    marginLeft: 25,
  },
  sectionImage: {
    width: 325,
    height: 281,
    marginBottom: 10
  },
  sectionInner: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5
  },
  sectionText: {
    backgroundColor: '#C4D7E1'
  }
})

module.exports = About

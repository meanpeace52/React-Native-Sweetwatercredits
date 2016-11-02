'use strict'

import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Components
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'

// Custom Components
import NavDrawer from '../components/NavDrawer'
import ViewContainer from '../components/ViewContainer'
import ZoneForm from '../components/ZoneForm'

class Zones extends Component {
  render () {
    const navigateToRuleViolations = () => Actions.ruleViolations()
    return (
      <ViewContainer style={styles.main}>
        <NavDrawer/>
        <Text style={styles.screenHeader}>
          Calculate Credits
        </Text>

        <Text style={styles.screenInfo}>
          For simple calculations, enter the acreage, select a zone type, and click next. To add multiple zones, enter the same information, but click Manage Zones below.
        </Text>
        <ZoneForm/>

        {/* Button Group */}
        <TouchableHighlight
          style={styles.buttonBlue}
          onPress={navigateToRuleViolations}>
          <Text style={styles.buttonBlueText}>
            {_.upperCase('Next')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonYellow}>
          <Text style={styles.buttonYellowText}>
            {_.upperCase('Manage Zones')}
          </Text>
        </TouchableHighlight>
        {/* End Button Group */}
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  buttonBlue: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 110
  },
  buttonBlueText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400'
  },
  buttonYellow: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    borderRadius: 2,
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 170
  },
  buttonYellowText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center'
  },
  main: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 75
  },
  screenHeader: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  screenInfo: {
    fontFamily: 'Helvetica',
    fontWeight: '300',
    marginBottom: 10,
    marginTop: 10
  }
})

module.exports = Zones

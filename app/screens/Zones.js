'use strict'

import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Components
import _ from 'lodash'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

// Custom Components
import NavDrawer from '../components/NavDrawer'
import ViewContainer from '../components/ViewContainer'
import ZoneForm from '../components/ZoneForm'

class Zones extends Component {
  static propTypes = {
    routes: PropTypes.object
  }
  handleButtonPress(e) {
    e.preventDefault()
    console.log('Submittting the Zone')
    console.log(this.state)
    const { zoneId } = this.props
    // Pull the values from the form
    // TODO: ref to textInputs
    const acreage = this.state.acreage.value
    const zoneType = this.state.zoneType.value

    // Call to action.reducers to modify store
    this.props.addZone(zoneId, acreage, zoneType)
    // this.ref.zoneForm.reset()
    // navigate to another screen
    // Actions.ruleViolations()
  }
  render () {
    const navigateToRuleViolations = () => Actions.ruleViolations()
    const { scene } = this.props.routes

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
          onChangeText={(acreage) => this.setState({acreage})}
          onPress={this.handleButtonPress}>
          <Text style={styles.buttonBlueText}>
            {_.upperCase('Next')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonYellow}>
          <Text
            style={styles.buttonYellowText}>
            {_.upperCase('Manage Zones')}
          </Text>
        </TouchableHighlight>
        {/* End Button Group */}
        <Text>
          The current scene is titled { scene.title }
        </Text>
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

export default connect(({routes}) => ({routes}))(Zones);

'use strict'

import React, { Component } from 'react'
import { Image, ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Components
import _ from 'lodash'

// Custom Components
import ViewContainer from '../components/ViewContainer'
import NavDrawer from '../components/NavDrawer'

class Projects extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      this.state = {
        dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5', 'row 6', 'row 7', 'row 8', 'row 9']),
      }
    }

  render () {
    return (
      <ViewContainer style={styles.main}>
        <NavDrawer/>
        <Text style={styles.scrollContainerTitle}>
          Recent Projects
        </Text>

        <View style={styles.scrollContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
        </View>

        <TouchableHighlight style={styles.buttonBig}>
          <Text style={styles.buttonBigText}>
            {_.upperCase('New Calculation')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonSmall}>
          <Text style={styles.buttonSmallText}>
            {_.upperCase('First Time') + '?'}
          </Text>
        </TouchableHighlight>

      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  buttonBig: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 208
  },
  buttonBigText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '500'
  },
  buttonSmall: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    borderRadius: 2,
    height: 36,
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: 144
  },
  buttonSmallText: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 16,
    textAlign: 'center'
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 75
  },
  scrollContainer: {
    height: 240
  },
  scrollContainerTitle: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10
  },
  logoNavContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logo: {
    height: 92,
    width: 161
  }
})

module.exports = Projects

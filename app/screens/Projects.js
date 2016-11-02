'use strict'

import React, { Component } from 'react'
import { Image, ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'

// Vendor Components
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'

// Custom Components
import ViewContainer from '../components/ViewContainer'
import NavDrawer from '../components/NavDrawer'

class Projects extends Component {
  constructor () {
    super()
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5', 'Project 6', 'Project 7', 'Project 8', 'Project 9', 'Project 11', 'Project 12', 'Project 13', 'Project 14', 'Project 15'])
    }
  }

  render () {
    const navigateToZones = () => Actions.zones()
    return (
      <ViewContainer style={styles.main}>
        <NavDrawer/>
        <Text style={styles.scrollContainerTitle}>
          Recent Projects
        </Text>

        <View style={styles.scrollContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight style={styles.listItem}>
                <View style={styles.listItemRow}>
                  <Text style={styles.listItemText}>{rowData}</Text>
                  <Text style={styles.listItemText}>{'11-2-2016'}</Text>
                </View>
              </TouchableHighlight>
            }
          />
        </View>

        <TouchableHighlight
          style={styles.buttonBlue}
          onPress={navigateToZones}>
          <Text style={styles.buttonBlueText}>
            {_.upperCase('New Calculation')}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonYellow}>
          <Text style={styles.buttonYellowText}>
            {_.upperCase('First Time') + '?'}
          </Text>
        </TouchableHighlight>

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
    width: 208
  },
  buttonBlueText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '500'
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
    width: 144
  },
  buttonYellowText: {
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
    borderTopColor: 'gainsboro',
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 240,
    marginBottom: 10
  },
  scrollContainerTitle: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10
  },
  listItem: {
    borderBottomColor: 'gainsboro',
    borderBottomWidth: 1
  },
  listItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listItemText: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '500',
    margin: 7
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

'use strict'

import React, { Component } from 'react'
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'

class Settings extends Component {

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'Tutorial', 'Change Email', 'Sign Out'
      ])
    }
  }

  render () {
    return (
      <View>
        <StatusBarBackground/>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight>
              <View style={styles.container}>
                <Text style={styles.text}>
                  {`${rowData}`}
                </Text>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  list: {
    marginTop: 30,
    height: 400
  }
})

module.exports = Settings

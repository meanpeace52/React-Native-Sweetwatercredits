'use strict'

import React, { Component, PropTypes } from 'react'
import { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'

class Settings extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows([
        'Tutorial', 'Change Email', 'Sign Out'
      ])
    }
    this._onForward = this._onForward.bind(this)
    this._onBack = this._onBack.bind(this)
  }

  _onForward(routeName) {
    this.props.navigator.push({
      name: routeName
    })
  }

  _onBack() {
    this.props.navigator.pop()
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
    height: 400
  }
})

module.exports = Settings

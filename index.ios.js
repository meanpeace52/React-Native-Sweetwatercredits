'use strict'

import React, { Component } from 'react'
import { AppRegistry, NavigatorIOS, StyleSheet, TabBarIOS, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Root from './app/screens/Root'
import Settings from './app/screens/Settings'

class sweetwaterCredits extends Component {
  constructor (props) {
    super(props)
    this.state = {selectedTab: 'home'}
  }

  render () {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItem
        selected={this.state.selectedTab === 'home'}
        title='Home'
        iconName='home'
        onPress={() => {
          this.setState({
            selectedTab: 'home'
          })
        }}>
          <NavigatorIOS
            initialRoute={{
              component: Root,
              title: 'Root.js',
              name: 'root'
            }}
            style={{flex: 1}}
          />
        </Icon.TabBarItem>

        <Icon.TabBarItem
        selected={this.state.selectedTab === 'info'}
        title='Info'
        iconName='info'
        onPress={() => {
          this.setState({
            selectedTab: 'info'
          })
        }}>
          <Text style={styles.tabText}>
            Info Tab
          </Text>
        </Icon.TabBarItem>

        <Icon.TabBarItem
        selected={this.state.selectedTab === 'settings'}
        title='Settings'
        iconName='gear'
        onPress={() => {
          this.setState({
            selectedTab: 'settings'
          })
        }}>
          <Settings/>
        </Icon.TabBarItem>

      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  tabText: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50
  }
})

AppRegistry.registerComponent('sweetwaterCredits', () => sweetwaterCredits)

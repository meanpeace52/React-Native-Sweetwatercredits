'use strict'

import React, { Component } from 'react'
import { Text } from 'react-native'

// Components import
import StatusBarBackground from '../components/StatusBarBackground'
import ViewContainer from '../components/ViewContainer'

class Projects extends Component {
  render () {
    return (
      <ViewContainer>
        <StatusBarBackground/>
        <Text>
          Projects Component!
        </Text>
      </ViewContainer>
    )
  }
}

module.exports = Projects

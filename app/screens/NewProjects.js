'use strict'

import React, { Component } from 'react'
import { Text } from 'react-native'

// Custom Components
import ViewContainer from '../components/ViewContainer'

class NewProjects extends Component {
  render () {
    return (
      <ViewContainer>
        <Text>
          NewProjects Component!
        </Text>
      </ViewContainer>
    )
  }
}

module.exports = NewProjects

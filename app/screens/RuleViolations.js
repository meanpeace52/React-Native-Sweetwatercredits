'use strict'

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

class RuleViolations extends Component {
  render () {
    return (
      <View>
        <Text>
          Rule Violations
        </Text>
      </View>
    )
  }
}

export default connect(({routes}) => ({routes}))(RuleViolations)

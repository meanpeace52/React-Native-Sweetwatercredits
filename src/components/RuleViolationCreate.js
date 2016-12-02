import React, { Component } from 'react';
import { View } from 'react-native';
import RuleViolationForm from './RuleViolationForm';

class RuleViolationCreate extends Component {
  render() {
    return (
      <View style={{ paddingTop: 80 }}>
        <RuleViolationForm {...this.props} />
      </View>
    );
  }
}

export default RuleViolationCreate;

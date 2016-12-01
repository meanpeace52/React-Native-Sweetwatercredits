import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton } from './common';
import RuleViolationForm from './RuleViolationForm';

class RuleViolationCreate extends Component {
  onButtonPress() {
    // const { acreage, zoneType, projectUid } = this.props;
    // this.props.zoneCreate({ acreage, zoneType, projectUid });
  }

  render() {
    return (
      <View style={{ paddingTop: 80 }}>
        <RuleViolationForm {...this.props} />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='add' size={14} />
          Create Rule Violation
        </BlueButton>

      </View>
    );
  }
}

export default RuleViolationCreate;

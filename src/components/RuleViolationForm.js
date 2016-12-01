import React, { Component } from 'react';
import { View } from 'react-native';
import CoreForm from './CoreForm';
import NonCoreForm from './NonCoreForm';

class RuleViolationForm extends Component {
  formContent() {
    const { zoneType } = this.props.zone;
    if (zoneType === 'Core') {
      return <CoreForm />;
    }

    return <NonCoreForm />;
  }

  render() {
    return (
      <View>
        { this.formContent() }
      </View>
    );
  }
}

export default RuleViolationForm;

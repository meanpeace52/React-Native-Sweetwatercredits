import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';

class DisturbanceNonCoreViolations extends Component {
  componentWillMount() {
      this.props.disturbanceUpdate({ prop: 'ruleViolation', value: 'siting' });
  }

  render() {
    return (
      <View>
        <Card>
          <Picker
            onValueChange={value => this.props.disturbanceUpdate({ prop: 'ruleViolation', value })}
            selectedValue={this.props.ruleViolation}
          >
            <Picker.Item label="Siting within < 0.25 miles of lek?" value="siting" />
            <Picker.Item label="Timing Stipulations (TLS)" value="tls" />
          </Picker>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  } = state.disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceNonCoreViolations);

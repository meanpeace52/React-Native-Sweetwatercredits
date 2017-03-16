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
    const { ruleViolation } = this.props
    return (
      <View>
        <Card>
          <Picker
            onValueChange={value => this.props.disturbanceUpdate({ prop: 'ruleViolation', value })}
            selectedValue={ruleViolation}
          >
            <Picker.Item label="Siting within < 0.25 miles of a lek?" value="siting" />
            <Picker.Item label="Timing Stipulations (TLS)" value="tls" />
          </Picker>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ disturbanceForm }) => {
  const {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  } = disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceNonCoreViolations);

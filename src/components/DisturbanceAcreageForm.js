import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Input } from './common';

class DisturbanceAcreageForm extends Component {
  render() {
    return (
      <View>
        <Input
          icon="nature"
          placeholder="Acreage"
          onChangeText={value => this.props.disturbanceUpdate({ prop: 'acreage', value })}
          value={this.props.acreage}
          keyboardType="numbers-and-punctuation"
        />
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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceAcreageForm);

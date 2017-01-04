import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';
import DisturbanceLocationForm from './DisturbanceLocationForm';

class DisturbanceNonCore extends Component {
  renderVunerableLocationForm() {
    const { ruleViolation } = this.props;

    if (ruleViolation !== 'timing') {
      return (
        <DisturbanceLocationForm {...this.props} />
      );
    }
  }

  render() {
    return (
      <View>
        <Card>
        <Picker
          onValueChange={value => this.props.disturbanceUpdate({ prop: 'ruleViolation', value })}
          selectedValue={this.props.ruleViolation}
        >
          <Picker.Item label="Impact within < 0.25 miles of lek?" value="impact" />
          <Picker.Item label="One year of timing stipulations?" value="timing" />
        </Picker>
        </Card>
        {this.renderVunerableLocationForm()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    projectUid,
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    penaltyAmount } = state.disturbanceForm;

    return { projectUid, acreage, zoneType, ruleViolation, vulnerableLocation, penaltyAmount };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceNonCore);

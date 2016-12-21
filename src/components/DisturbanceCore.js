import React, { Component } from 'react';
import { Picker, View } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';
import DisturbanceLocationForm from './DisturbanceLocationForm';

class DisturbanceCore extends Component {
  renderVunerableLocationForm() {
    const { ruleViolation } = this.props;

    if (ruleViolation !== 'impact') {
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
            <Picker.Item
              label="Sitting withing < 0.6 of a lek?"
              value="sitting"
            />
            <Picker.Item
              label="Roads within 1.9 miles of a lek?"
              value="roads"
            />
            <Picker.Item
              label="Greater than 1 activity per 640 acres on average?"
              value="activity"
            />
            <Picker.Item
              label="Surface disturbance > 5%?"
              value="disturbance"
            />
            <Picker.Item
              label="Short Term Impacts?"
              value="impact"
            />
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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceCore);

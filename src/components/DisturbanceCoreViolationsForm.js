import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';

class DisturbanceCoreViolations extends Component {
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
            <Picker.Item
              label="Siting within < 0.6 of a lek?"
              value="siting"
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
              value="surface"
            />

            <Picker.Item
              label="Short Term?"
              value="short-term"
            />

            <Picker.Item
              label="Timing Stipulation (TLS)"
              value="tls"
            />
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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceCoreViolations);

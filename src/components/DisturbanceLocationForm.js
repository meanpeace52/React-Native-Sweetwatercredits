import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';

class DisturbanceLocationForm extends Component {
  componentWillMount() {
    this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value: 'Yes' });
  }

  render() {
    return (
      <View>
        <Picker
          selecteValue={this.props.vulnerableLocation}
          onChangeValue={
            value => this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value })
          }
        >
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
        </Picker>

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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceLocationForm);

import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './common';
import { disturbanceUpdate } from '../actions';

class DisturbanceLocationForm extends Component {
  componentWillMount() {
    this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value: 'Yes' });
  }

  render() {
    return (
      <View>
        <Card>
          <Picker
            onValueChange={
              value => this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value })
            }
            selectedValue={this.props.vulnerableLocation}
          >
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
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
    vulnerableLocation
  } = state.disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation
  };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceLocationForm);

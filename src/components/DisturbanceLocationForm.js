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
    const { vulnerableLocation } = this.props;
    return (
      <View>
        <Card>
          <Picker
            onValueChange={
              value => this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value })
            }
            selectedValue={vulnerableLocation}
          >
            <Picker.Item label="Yes" value="Yes" />
            <Picker.Item label="No" value="No" />
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
    vulnerableLocation
  } = disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation
  };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceLocationForm);

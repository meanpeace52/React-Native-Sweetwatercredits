import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Input } from './common';
import { disturbanceUpdate } from '../actions';

class DisturbanceAcreageZoneTypeForm extends Component {
  render() {
    return (
      <View>
        <Input
          icon="nature"
          placeholder="Acreage"
          onChangeText={value => this.props.disturbanceUpdate({ prop: 'acreage', value })}
          value={this.props.acreage}
        />

        <Text
          style={{ fontWeight: 'bold', paddingLeft: 7, paddingTop: 15, fontSize: 18 }}
        >
          Zone Type
        </Text>
        <Card>
          <Picker
            selectedValue={this.props.zoneType}
            onValueChange={value => this.props.disturbanceUpdate({ prop: 'zoneType', value })}
          >
            <Picker.Item label="Core" value="core" />
            <Picker.Item label="Non-Core" value="non-core" />
          </Picker>
        </Card>
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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceAcreageZoneTypeForm);

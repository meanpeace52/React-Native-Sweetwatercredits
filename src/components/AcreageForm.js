import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, Input } from './common';
import { disturbanceUpdate } from '../actions';

class AcreageForm extends Component {
  render() {
    return (
      <View>
        <Input
          icon="nature"
          placeholder="Acreage"
          onChangeText={value => this.props.disturbanceUpdate({ prop: 'acreage', value })}
          value={this.props.acreage}
        />

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
    project,
    acreage,
    zoneType,
    primaryRuleViolation,
    secondaryRuleViolation,
    penalty } = state.disturbanceForm;

    return { project, acreage, zoneType, primaryRuleViolation, secondaryRuleViolation, penalty };
};

export default connect(mapStateToProps, { disturbanceUpdate })(AcreageForm);

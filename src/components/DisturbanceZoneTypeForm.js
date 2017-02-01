import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card } from './common';
import { disturbanceUpdate } from '../actions';

class DisturbanceZoneTypeForm extends Component {
  render() {
    const { zoneType } = this.props;
    return (
      <View>
        <Text> Select a Zone Type: </Text>
        <Card>
          <Picker
            selectedValue={zoneType}
            onValueChange={value => this.props.disturbanceUpdate({ prop: 'zoneType', value })}
          >
            <Picker.Item label="Core" value="Core" />
            <Picker.Item label="Non-Core" value="Non-Core" />
          </Picker>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ disturbanceForm }) => {
  const { zoneType } = disturbanceForm;
  return { zoneType };
};

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceZoneTypeForm);

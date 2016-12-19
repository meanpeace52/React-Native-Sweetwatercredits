import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { Card, CardSection, Input } from './common';

class AcreageForm extends Component {
  render() {
    return (
      <View>
        <Input
          icon="nature"
          placeholder="Acreage"
          // onChangeText={}
          value={this.props.acreage}
        />

        <Card>
          <Picker
            selectedValue={this.props.zoneType}
            // onValueChange={(lang) => this.setState({language: lang})}
          >
            <Picker.Item label="Core" value="core" />
            <Picker.Item label="Non-Core" value="non-core" />
          </Picker>
        </Card>
      </View>
    );
  }
}

export default AcreageForm;

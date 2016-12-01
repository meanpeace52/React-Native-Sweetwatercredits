import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { zoneUpdate } from '../actions';

class ZoneForm extends Component {
  render() {
    return (
      <View>
        <Card>
          <Input
            placeholder="Acreage"
            onChangeText={value => this.props.zoneUpdate({ prop: 'acreage', value })}
            value={this.props.acreage}
          />

          <CardSection>
            <Picker
              style={{ flex: 1 }}
              onValueChange={value => this.props.zoneUpdate({ prop: 'zoneType', value })}
              selectedValue={this.props.zoneType}
            >
              <Picker.Item label="Core" value="Core" />
              <Picker.Item label="Non-Core" value="Non-Core" />
            </Picker>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { acreage, zoneType } = state.zoneForm;
  return { acreage, zoneType };
};

export default connect(mapStateToProps, { zoneUpdate })(ZoneForm);

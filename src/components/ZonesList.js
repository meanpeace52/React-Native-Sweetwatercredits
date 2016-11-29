import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BlueButton, LogoTopMiddle } from './common';


class ZonesList extends Component {
  onButtonPress() {
    const { project_uid } = this.props;
    Actions.zoneCreate({ project_uid });
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <LogoTopMiddle />
        <Text>
          Zones List
        </Text>
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Add Zone
        </BlueButton>
      </View>
    );
  }
}

export default ZonesList;

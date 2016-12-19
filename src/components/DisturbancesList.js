import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Container, LogoTopMiddle } from './common';

class DisturbancesList extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopMiddle />
        <BlueButton
          onPress={() => Actions.disturbanceCreate()}
        >
          <Icon name="add" size={18} /> Add Disturbance
        </BlueButton>

      </Container>
    )
  }
 }

export default DisturbancesList;

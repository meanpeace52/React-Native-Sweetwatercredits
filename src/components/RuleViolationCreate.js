import React, { Component } from 'react';
// import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Container, LogoTopLeft } from './common';


class RuleViolationCreate extends Component {
  onButtonPress() {
    // const { acreage, zoneType, projectUid } = this.props;
    // this.props.zoneCreate({ acreage, zoneType, projectUid });
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopLeft />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='add' size={14} />
          Create Rule Violation
        </BlueButton>

      </Container>
    );
  }
}

export default RuleViolationCreate;

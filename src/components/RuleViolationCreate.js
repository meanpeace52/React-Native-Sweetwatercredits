import React, { Component } from 'react';
import { Picker } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Card, Container, LogoTopLeft } from './common';


class RuleViolationCreate extends Component {
  onButtonPress() {
    // const { acreage, zoneType, projectUid } = this.props;
    // this.props.zoneCreate({ acreage, zoneType, projectUid });
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />

        <Card>
          <Picker
            style={{ flex: 1 }}
            // onChangeValue={}
            // value={}
          >
            <Picker.Item label='Core' value='Core' />
            <Picker.Item label='Non-Core' value='Non-Core' />
          </Picker>
        </Card>

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='report-problem' size={14} />
          Create Rule Violation
        </BlueButton>

      </Container>
    );
  }
}

export default RuleViolationCreate;

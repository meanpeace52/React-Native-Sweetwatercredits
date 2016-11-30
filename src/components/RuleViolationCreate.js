import React, { Component } from 'react';
import { Text } from 'react-native';
import { BlueButton, CardSection, Container, LogoTopLeft, Title } from './common';


class RuleViolationCreate extends Component {
  onButtonPress() {
    // const { acreage, zoneType, projectUid } = this.props;
    // this.props.zoneCreate({ acreage, zoneType, projectUid });
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />
        <Title>
          Rule Violations
        </Title>

        <CardSection>
          <Text>
            Main Rule Here
          </Text>
        </CardSection>


        <CardSection>
          <Text>
            Sub Rule Here
          </Text>
        </CardSection>

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Create Rule Violation
        </BlueButton>
      </Container>
    );
  }
}

export default RuleViolationCreate;

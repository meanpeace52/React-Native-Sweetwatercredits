import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { BlueButton, Container, LogoTopMiddle } from './common';


class RuleViolationList extends Component {
  navigateToRuleViolationCreate() {
    Actions.ruleViolationCreate();
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />
        <BlueButton
          onPress={this.navigateToRuleViolationCreate.bind(this)}
        >
          Add Rule Violation
        </BlueButton>
      </Container>
    );
  }
}

export default RuleViolationList;

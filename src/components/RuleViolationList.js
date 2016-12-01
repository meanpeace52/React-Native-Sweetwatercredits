import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { BlueButton, Card, Container, LogoTopMiddle } from './common';


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
          <Icon name='report-problem' size={14} />
          Add Rule Violation
        </BlueButton>

        <Card />
      </Container>
    );
  }
}

export default RuleViolationList;

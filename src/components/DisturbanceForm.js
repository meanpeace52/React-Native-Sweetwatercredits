import React, { Component } from 'react';
import { Container, LogoTopMiddle } from './common';
import AcreageForm from './AcreageForm';

class DisturbanceForm extends Component {
  renderFormFields() {
    // const { primaryRuleViolation, secondaryRuleViolation } = this.props;
    // // Check for null/undefined/empty values then re-renders the appropriate form
    // if (primaryRuleViolation) {
    //   // render secondary form
    // } elseif (secondaryRuleViolation) {
    //   // render primaryRuleViolation
    // } else {
    //   // render acreage/zoneType form
    // }
    const { acreage } = this.props;
    if (!acreage) {
      return (
        <AcreageForm {...this.props} />
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopMiddle />
          {this.renderFormFields()}
      </Container>
    );
  }
}

export default DisturbanceForm;

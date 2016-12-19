import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, LogoTopMiddle } from './common';
import { disturbanceCreate } from '../actions';
import AcreageForm from './AcreageForm';

class DisturbanceCreate extends Component {
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
          <AcreageForm {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = ({ disturbanceForm }) => {
  const {
    project,
    acreage,
    zoneType,
    primaryRuleViolation,
    secondaryRuleViolation,
    penalty } = disturbanceForm;

    return { project, acreage, zoneType, primaryRuleViolation, secondaryRuleViolation, penalty };
};

export default connect(mapStateToProps, { disturbanceCreate })(DisturbanceCreate);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disturbanceUpdate, disturbanceCreate } from '../actions';
import { Container, LogoTopMiddle, BlueButton } from './common';
import DisturbanceCore from './DisturbanceCore';
import DisturbanceNonCore from './DisturbanceNonCore';

class DisturbanceZoneForm extends Component {
  onButtonPress() {
    const {
      project,
      ruleViolation,
      vulnerableLocation,
      zoneType,
      acreage,
      penaltyAmount } = this.props;
    this.props.disturbanceCreate({
      projectUid: project.uid,
      ruleViolation,
      vulnerableLocation,
      zoneType,
      acreage,
      penaltyAmount
    });
  }

  renderZoneForm() {
    const { zoneType } = this.props;

    if (zoneType === 'core') {
      return <DisturbanceCore {...this.props} />;
    }
    return <DisturbanceNonCore {...this.props} />;
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />
        {this.renderZoneForm()}
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Next
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = ({ disturbanceForm }) => {
  const {
    projectUid,
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    penaltyAmount } = disturbanceForm;

    return { projectUid, acreage, zoneType, ruleViolation, vulnerableLocation, penaltyAmount };
};

export default connect(mapStateToProps, {
  disturbanceUpdate, disturbanceCreate })(DisturbanceZoneForm);

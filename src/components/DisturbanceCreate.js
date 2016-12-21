import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { disturbanceUpdate } from '../actions';
import { Container, LogoTopMiddle, BlueButton } from './common';
import DisturbanceAcreageZoneTypeForm from './DisturbanceAcreageZoneTypeForm';

class DisturbanceCreate extends Component {
  onButtonPress() {
    const { project, zoneType, acreage } = this.props;
    Actions.disturbanceZoneForm({ project, zoneType, acreage });
  }

  renderButton() {
    const { acreage } = this.props;
    if (acreage) {
      return (
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Next
        </BlueButton>
      );
    }
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />
        <DisturbanceAcreageZoneTypeForm {...this.props} />
        {this.renderButton()}
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

export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceCreate);

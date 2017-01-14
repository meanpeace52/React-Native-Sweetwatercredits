import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate, disturbanceCreate } from '../actions';
import { Container, BlueButton, LogoTopMiddle } from './common';
import DisturbanceLocationForm from './DisturbanceLocationForm';

class DisturbanceLocation extends Component {
  onButtonPress() {
    const {
        acreage,
        zoneType,
        ruleViolation,
        vulnerableLocation,
        debitAmount
    } = this.props;

    const projectUid = this.props.project.uid;

    this.props.disturbanceCreate({
      projectUid,
      acreage,
      zoneType,
      ruleViolation,
      vulnerableLocation,
      debitAmount
    });
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopMiddle />
        <Text>Located in Vulnerable Landscape?</Text>
        <DisturbanceLocationForm />
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Create Disturbance
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const {
      acreage,
      zoneType,
      ruleViolation,
      vulnerableLocation,
      debitAmount
  } = state.disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  };
};

export default connect(mapStateToProps,
  { disturbanceUpdate, disturbanceCreate })(DisturbanceLocation);

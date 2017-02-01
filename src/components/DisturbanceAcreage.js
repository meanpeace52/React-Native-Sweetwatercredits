import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, BlueButton, LogoTopMiddle } from './common';
import DisturbanceAcreageForm from './DisturbanceAcreageForm';
import { disturbanceUpdate, disturbanceAcreageUpdate } from '../actions';

class DisturbanceAcreage extends Component {
  onButtonPress() {
    const { zoneType, acreage, ruleViolation, project } = this.props;
    this.props.disturbanceAcreageUpdate({ zoneType, acreage, ruleViolation, project });
  }

  render() {
    const { acreage } = this.props;
    return (
      <Container>
        <LogoTopMiddle />
        <Text>Enter an Acreage Amount: </Text>
        <DisturbanceAcreageForm {...this.props} />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
          inactive={acreage ? false : true}
        >
          Next
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = ({ disturbanceForm }) => {
  const {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  } = disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation,
    debitAmount
  };
};


export default connect(mapStateToProps,
  { disturbanceUpdate, disturbanceAcreageUpdate })(DisturbanceAcreage);

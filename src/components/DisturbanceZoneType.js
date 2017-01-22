import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, BlueButton, LogoTopMiddle } from './common';
import { disturbanceUpdate, disturbanceZoneTypeUpdate } from '../actions';
import DisturbanceZoneTypeForm from './DisturbanceZoneTypeForm';

class DisturbanceZoneType extends Component {
  onButtonPress() {
    const { zoneType, project } = this.props;
    this.props.disturbanceZoneTypeUpdate({ zoneType, project });
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />
        <DisturbanceZoneTypeForm {...this.props} />
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
  { disturbanceUpdate, disturbanceZoneTypeUpdate })(DisturbanceZoneType);

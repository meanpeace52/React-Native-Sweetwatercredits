import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disturbanceCreate } from '../actions';
import DisturbanceForm from './DisturbanceForm';

class DisturbanceCreate extends Component {
  render() {
    return (
      <DisturbanceForm />
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

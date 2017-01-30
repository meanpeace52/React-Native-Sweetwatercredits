import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, LogoTopMiddle, BlueButton } from './common';
import { disturbanceUpdate, disturbanceViolationUpdate, disturbanceTlsCreate } from '../actions';
import DisturbanceCoreViolationsForm from './DisturbanceCoreViolationsForm';
import DisturbanceNonCoreViolationsForm from './DisturbanceNonCoreViolationsForm';

class DisturbanceViolation extends Component {
  onButtonPress() {
    const { ruleViolation } = this.props;
    if (ruleViolation === 'tls' || ruleViolation === 'short-term') {
      const {
        acreage,
        zoneType,
        vulnerableLocation,
      } = this.props;

      const projectUid = this.props.project.uid;

      this.props.disturbanceTlsCreate({
        projectUid,
        acreage,
        zoneType,
        ruleViolation,
        vulnerableLocation
      });
    } else {
      const { zoneType, project } = this.props;

      this.props.disturbanceViolationUpdate({ zoneType, ruleViolation, project });
    }
  }

  renderViolationByRuleType() {
    const { zoneType } = this.props;
    if (zoneType === 'Core') {
      return <DisturbanceCoreViolationsForm {...this.props} />;
    }
    return <DisturbanceNonCoreViolationsForm {...this.props} />;
  }

  renderButtonLanguage() {
    const { ruleViolation } = this.props;
    if (ruleViolation === 'tls' || ruleViolation === 'short-term') {
      return (<Text>Create Disturbance</Text>);
    }
    return (<Text>Next</Text>);
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />
        <Text> Select a {this.props.zoneType} Rule: </Text>
        {this.renderViolationByRuleType()}

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          {this.renderButtonLanguage()}
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
    vulnerableLocation
  } = disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation
  };
};

export default connect(mapStateToProps,
  { disturbanceUpdate, disturbanceViolationUpdate, disturbanceTlsCreate })(DisturbanceViolation);

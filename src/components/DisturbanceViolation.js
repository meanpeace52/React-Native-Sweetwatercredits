import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Container, LogoTopMiddle, BlueButton } from './common';
import { disturbanceUpdate, disturbanceViolationUpdate, disturbanceTlsCreate } from '../actions';
import DisturbanceCoreViolationsForm from './DisturbanceCoreViolationsForm';
import DisturbanceNonCoreViolationsForm from './DisturbanceNonCoreViolationsForm';

class DisturbanceViolation extends Component {

  /*
  * If this is a short term or tls then we will create that disturbance and redirect
  * else we continue filling out the form
  */
  onButtonPress() {
    const { ruleViolation } = this.props;
    if (ruleViolation === 'tls' || ruleViolation === 'short-term') {
      const {
        acreage,
        zoneType,
        vulnerableLocation,
      } = this.props;

      const projectUid = this.props.project.uid;
      const debitAmount = '10';

      this.props.disturbanceTlsCreate({
        projectUid,
        acreage,
        zoneType,
        ruleViolation,
        vulnerableLocation,
        debitAmount
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
    console.log(this.props);
    return (
      <Container>
        <LogoTopMiddle />
        <Text> Select a {this.props.zoneType} Rule Violation: </Text>
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

const mapStateToProps = (state) => {
  const {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation
  } = state.disturbanceForm;

  return {
    acreage,
    zoneType,
    ruleViolation,
    vulnerableLocation
  };
};

export default connect(mapStateToProps,
  { disturbanceUpdate, disturbanceViolationUpdate, disturbanceTlsCreate })(DisturbanceViolation);

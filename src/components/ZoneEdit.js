import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import ZoneForm from './ZoneForm';
import { zoneUpdate, zoneSave, zoneDelete } from '../actions';
import { Container, CardSection, BlueButton, Confirm, YellowButton, LogoTopLeft } from './common';

class ZoneEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // feed all the project props into the ProjectFormReducer
    _.each(this.props.zone, (value, prop) => {
      this.props.zoneUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { acreage, zoneType, project_uid, uid } = this.props;
    // this.props.zoneSave({ acreage, zoneType, uid: project_uid, zone_uid: uid });
  }

  onAccept() {
    console.log('del');
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navigateToRuleViolations() {
    Actions.ruleViolationCreate();
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />

        <ZoneForm />

        <CardSection>
          <BlueButton onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </BlueButton>
        </CardSection>

        <CardSection>
          <BlueButton
            onPress={this.navigateToRuleViolations.bind(this)}
          >
            Rule Violations
          </BlueButton>
        </CardSection>

        <CardSection style={{ justifyContent: 'center' }}>
          <YellowButton
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Delete Project
          </YellowButton>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { acreage, zoneType, project_uid } = state.zoneForm;
  return { acreage, zoneType, project_uid };
};

export default connect(mapStateToProps, {
  zoneUpdate,
  zoneSave,
  zoneDelete })(ZoneEdit);

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
    const { acreage, zoneType, projectUid } = this.props;
    const { uid } = this.props.zone; // zone uid
    this.props.zoneSave({ acreage, zoneType, projectUid, zoneUid: uid });
  }

  onAccept() {
    console.log('del');
    const { projectUid, uid } = this.props.zone;
    this.props.zoneDelete({ projectUid, zoneUid: uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navigateToRuleViolations() {
    Actions.ruleViolationList();
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopLeft />

        <ScrollView>

          <ZoneForm />

          <CardSection>
            <BlueButton onPress={this.onButtonPress.bind(this)}>
              <Icon name='done' size={14} />
              Save Changes
            </BlueButton>
          </CardSection>

          <CardSection>
            <BlueButton
              onPress={this.navigateToRuleViolations.bind(this)}
            >
              <Icon name='report-problem' size={14} />
              Rule Violations
            </BlueButton>
          </CardSection>

          <CardSection style={{ justifyContent: 'center' }}>
            <YellowButton
              onPress={() => this.setState({ showModal: !this.state.showModal })}
            >
              <Icon name='delete' size={14} />
              Delete Zone
            </YellowButton>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { acreage, zoneType, projectUid } = state.zoneForm;
  return { acreage, zoneType, projectUid };
};

export default connect(mapStateToProps, {
  zoneUpdate,
  zoneSave,
  zoneDelete })(ZoneEdit);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import ProjectForm from './ProjectForm';
import { projectUpdate, projectSave, projectDelete } from '../actions';
import { Container, BlueButton, Confirm, LogoTopLeft, YellowButton } from './common';

class ProjectEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // feed all the project props into the ProjectFormReducer
    _.each(this.props.project, (value, prop) => {
      this.props.projectUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name } = this.props;
    const { uid, zones } = this.props.project;
    this.props.projectSave({ name, uid, zones });
  }

  onAccept() {
    const { uid } = this.props.project;
    this.props.projectDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navigateToZones() {
    const { uid } = this.props.project;
    Actions.zonesList({ projectUid: uid });
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />

        <ProjectForm />

        <BlueButton onPress={this.onButtonPress.bind(this)}>
          <Icon name='done' size={14} />
          Save Changes
        </BlueButton>

        <BlueButton onPress={this.navigateToZones.bind(this)}>
          <Icon name='landscape' size={14} />
          Zones
        </BlueButton>

        <YellowButton
          onPress={() => this.setState({ showModal: !this.state.showModal })}
        >
          <Icon name='delete' size={14} />
          Delete Project
        </YellowButton>

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
  const { name } = state.projectForm;
  return { name };
};

export default connect(mapStateToProps, {
  projectUpdate,
  projectSave,
  projectDelete })(ProjectEdit);

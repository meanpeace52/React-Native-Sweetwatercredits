import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import ProjectForm from './ProjectForm';
import { projectUpdate, projectSave, projectDelete } from '../actions';
import { Container, BlueButton, Confirm, LogoTopMiddle, YellowButton } from './common';

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
    const { uid } = this.props.project;
    this.props.projectSave({ name, uid });
  }

  onAccept() {
    const { uid } = this.props.project;
    this.props.projectDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Container>
        <LogoTopMiddle />

        <ProjectForm />

        <BlueButton onPress={this.onButtonPress.bind(this)}>
          <Icon name='done' size={18} /> Update Project Name
        </BlueButton>

        <BlueButton>
          <Icon name='landscape' size={18} /> View/Edit Zones
        </BlueButton>

        <YellowButton
          onPress={() => this.setState({ showModal: !this.state.showModal })}
        >
          <Icon name='delete' size={18} /> Delete Project
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

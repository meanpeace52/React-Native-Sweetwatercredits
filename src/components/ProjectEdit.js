import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import ProjectForm from './ProjectForm';
import { projectUpdate, projectSave, projectDelete } from '../actions';
import { Container, CardSection, BlueButton, Confirm, YellowButton } from './common';

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
    this.props.projectSave({ name, uid: this.props.project.uid });
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
    Actions.zonesList({ project_uid: uid });
  }

  render() {
    return (
      <Container>
        <ProjectForm />
        <CardSection>
          <BlueButton onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </BlueButton>
        </CardSection>

        <CardSection>
          <BlueButton onPress={this.navigateToZones.bind(this)}>
            Zones
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
          Are you sure ou want to delete this?
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

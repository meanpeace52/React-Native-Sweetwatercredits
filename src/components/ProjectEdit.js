import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ProjectForm from './ProjectForm';
import { projectUpdate, projectSave, projectDelete } from '../actions';
import { Container, CardSection, BlueButton, Confirm } from './common';

class ProjectEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // feed all the project props into the project form reducer
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

  render() {
    return (
      <Container>
        <ProjectForm />
        <CardSection>
          <BlueButton onPress={this.onButtonPress.bind(this)}>
            {_.toUpper('save changes')}
          </BlueButton>
        </CardSection>

        <CardSection>
          <BlueButton
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            {_.toUpper('Delete Project')}
          </BlueButton>
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

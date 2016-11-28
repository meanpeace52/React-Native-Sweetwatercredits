import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { BlueButton, Container, LogoTopLeft, Input } from './common';
import { updateProject, projectCreate } from '../actions';

class ProjectCreate extends Component {
  onButtonPress() {
    const { name } = this.props;
    this.props.projectCreate({ name });
    // Action.pop();
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />

        <Input
          placeholder="Project Name"
          value={this.props.name}
          onChangeText={value => this.props.updateProject({ prop: 'name', value })}
        />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          {_.toUpper('Create New Project')}
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = (projectsForm) => {
  const { name } = projectsForm;
  return { name };
};

export default connect(mapStateToProps, { updateProject, projectCreate })(ProjectCreate);

import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BlueButton, Container, LogoTopLeft, Input } from './common';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateProject, projectCreate } from '../actions';

class ProjectCreate extends Component {
  onButtonPress() {
    const { name } = this.props;
    this.props.projectCreate({ name });
    // Action.pop();
  }

  render() {
    const navigateToProjectsList = () => Actions.projectsList();
    return (
      <Container>
        <LogoTopLeft/>
        <Input
          placeholder="Project Name"
          value={this.props.name}
          onChangeText={value => this.props.updateProject({prop: 'name', value })}
        />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}>
          {_.toUpper('Create New Project')}
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.projectsForm;
  return { name };
};

export default connect(mapStateToProps, { updateProject, projectCreate })(ProjectCreate);

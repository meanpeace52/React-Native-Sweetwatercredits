import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { BlueButton, Container, LogoTopLeft, Input } from './common';
import { projectUpdate, projectCreate } from '../actions';

class ProjectCreate extends Component {
  onButtonPress() {
    const { name } = this.props;
    this.props.projectCreate({ name });
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />

        <Input
          placeholder="Project Name"
          onChangeText={value => this.props.projectUpdate({ prop: 'name', value })}
          value={this.props.name}
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

const mapStateToProps = ({ projectForm }) => {
  const { name } = projectForm;
  return { name };
};

export default connect(mapStateToProps, { projectUpdate, projectCreate })(ProjectCreate);

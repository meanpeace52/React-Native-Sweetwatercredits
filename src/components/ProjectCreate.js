import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { BlueButton, Container } from './common';
import { projectCreate } from '../actions';
import ProjectForm from './ProjectForm';

class ProjectCreate extends Component {
  onButtonPress() {
    const { name } = this.props;
    this.props.projectCreate({ name });
  }

  render() {
    return (
      <Container>
        <ProjectForm {...this.props} />
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

export default connect(mapStateToProps, { projectCreate })(ProjectCreate);

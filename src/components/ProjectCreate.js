import React, { Component } from 'react';

import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Container, LogoTopMiddle } from './common';
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
        <LogoTopMiddle />

        <ProjectForm {...this.props} />
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
          inactive={this.props.name ? false : true}
        >
          <Icon name='domain' size={18} /> {_.toUpper('Create A Project')}
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

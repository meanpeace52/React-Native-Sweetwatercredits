import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { projectsFetch } from '../actions';
import { Container } from './common';


class ProjectsList extends Component {
  componentWillMount() {
    this.props.projectsFetch();
  }

  render() {
    return (
      <Container>
        <Text>HELLLOO</Text>
      </Container>
    );
  }
}

export default connect(null, { projectsFetch })(ProjectsList);

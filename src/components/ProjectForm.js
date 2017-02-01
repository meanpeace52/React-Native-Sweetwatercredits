import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './common';
import { projectUpdate } from '../actions';


class ProjectForm extends Component {
  render() {
    const { name } = this.props;
    return (
      <Input
        icon="landscape"
        placeholder="Project Name"
        onChangeText={value => this.props.projectUpdate({ prop: 'name', value })}
        value={name}
      />
    );
  }
}

const mapStateToProps = ({ projectForm }) => {
  const { name } = projectForm;
  return { name };
};

export default connect(mapStateToProps, { projectUpdate })(ProjectForm);

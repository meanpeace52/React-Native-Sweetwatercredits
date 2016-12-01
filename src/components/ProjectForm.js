import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from './common';
import { projectUpdate } from '../actions';


class ProjectForm extends Component {
  render() {
    return (
      <Input
        placeholder="Project Name"
        onChangeText={value => this.props.projectUpdate({ prop: 'name', value })}
        value={this.props.name}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.projectForm;
  return { name };
};

export default connect(mapStateToProps, { projectUpdate })(ProjectForm);

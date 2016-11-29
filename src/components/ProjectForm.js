import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { LogoTopLeft, Input } from './common';
import { projectUpdate } from '../actions';


class ProjectForm extends Component {
  render() {
    return (
      <View>
        <LogoTopLeft />

        <Input
          placeholder="Project Name"
          onChangeText={value => this.props.projectUpdate({ prop: 'name', value })}
          value={this.props.name}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.projectForm;
  return { name };
};

export default connect(mapStateToProps, { projectUpdate })(ProjectForm);

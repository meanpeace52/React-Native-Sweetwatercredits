import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { authFieldUpdate } from '../actions';
import { Input } from './common';


class PasswordResetRequestForm extends Component {
  render() {
    return (
      <View>
        <Input
          placeholder="Email"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'email', value })}
          value={this.props.email}
          autoCapitalize="none"
          icon="person-outline"
          keyboardType="email-address"
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { email, error } = state.auth;
  return { email, error };
};

export default connect(mapStateToProps, { authFieldUpdate })(PasswordResetRequestForm);

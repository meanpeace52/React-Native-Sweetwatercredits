import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { authFieldUpdate } from '../actions';
import { Input } from './common';


class PasswordResetRequestForm extends Component {
  render() {
    const { email } = this.props;
    return (
      <View>
        <Input
          placeholder="Email"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'email', value })}
          value={email}
          autoCapitalize="none"
          icon="person-outline"
          keyboardType="email-address"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, error } = auth;
  return { email, error };
};

export default connect(mapStateToProps, { authFieldUpdate })(PasswordResetRequestForm);

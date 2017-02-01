import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './common';
import { authFieldUpdate } from '../actions';

class LoginForm extends Component {
  render() {
    const { email, password } = this.props;
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

        <Input
          placeholder="Password"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'password', value })}
          value={password}
          icon="lock-outline"
          secureTextEntry
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, message } = auth;
  return { email, password, error, loading, message };
};

export default connect(mapStateToProps, { authFieldUpdate })(LoginForm);

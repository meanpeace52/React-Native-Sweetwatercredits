import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './common';
import { authFieldUpdate } from '../actions';

class PasswordResetForm extends Component {
  render() {
    const { code, password, password_confirmation, error } = this.props;
    const inputIcon = () => {
        if (password && password_confirmation) {
          if (password === password_confirmation) {
            return 'lock-outline';
          }
        }
        return 'lock-open';
    };

    return (
      <View>

        <Input
          icon={'cloud-circle'}
          placeholder="Verification Code"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'code', value })
          }
          value={code}
          secureTextEntry
        />

        <Input
          icon={inputIcon()}
          placeholder="Password"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'password', value })
          }
          value={password}
          secureTextEntry
        />

        <Input
          icon={inputIcon()}
          placeholder="Password Confirmation"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'password_confirmation', value })
          }
          value={password_confirmation}
          secureTextEntry
        />

        <Text>{error}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { code, password, password_confirmation, error } = state.auth;
  return { code, password, password_confirmation, error };
};

export default connect(mapStateToProps, { authFieldUpdate })(PasswordResetForm);

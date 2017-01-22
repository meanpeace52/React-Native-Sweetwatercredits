import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './common';
import { authFieldUpdate } from '../actions';

class PasswordResetForm extends Component {
  render() {
    const { password, newPassword, newPasswordConfirm } = this.props;

    const inputIcon = () => {
        if (newPassword && newPasswordConfirm) {
          if (newPassword === newPasswordConfirm) {
            return 'lock-outline';
          }
        }
        return 'lock-open';
    };

    return (
      <View>
        <Input
          icon={'lock'}
          placeholder="Current Password"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'password', value })
          }
          value={password}
          secureTextEntry
        />

        <Input
          icon={inputIcon()}
          placeholder="Password"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'newPassword', value })
          }
          value={newPassword}
          secureTextEntry
        />

        <Input
          icon={inputIcon()}
          placeholder="Password Confirmation"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'newPasswordConfirm', value })
          }
          value={newPasswordConfirm}
          secureTextEntry
        />

      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { password, newPassword, newPasswordConfirm, error } = auth;
  return { password, newPassword, newPasswordConfirm, error };
};

export default connect(mapStateToProps, { authFieldUpdate })(PasswordResetForm);

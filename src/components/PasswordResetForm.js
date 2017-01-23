import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './common';
import { authFieldUpdate } from '../actions';

class PasswordResetForm extends Component {
  render() {
    const { password, newPassword, newPasswordConfirm } = this.props;

    // Render different lock icons if password and confirm match
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
          placeholder="New Password"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'newPassword', value })
          }
          value={newPassword}
          secureTextEntry
        />

        <Input
          icon={inputIcon()}
          placeholder="Confirm New Password"
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

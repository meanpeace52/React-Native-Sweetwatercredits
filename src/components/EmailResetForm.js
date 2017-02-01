import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { authFieldUpdate } from '../actions';
import { Input } from './common';

class EmailResetForm extends Component {
  render() {
    const { password, email, newEmail } = this.props;
    return (
      <View>
        <Input
          icon="lock"
          placeholder="Current Password"
          onChangeText={
            value => this.props.authFieldUpdate({ prop: 'password', value })
          }
          value={password}
          secureTextEntry
        />

        <Input
          icon="person-outline"
          placeholder="New Email"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'newEmail', value })}
          value={newEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, newEmail } = auth;
  return { email, password, newEmail };
};

export default connect(mapStateToProps, { authFieldUpdate })(EmailResetForm);

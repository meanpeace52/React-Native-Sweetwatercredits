import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Input } from './common';
import { registerFieldUpdate } from '../actions';

class RegisterForm extends Component {
  onButtonPress() {
    const { email, password, passwordConfirmation } = this.props;
    this.props.registerUser({ email, password, passwordConfirmation });
  }

  render() {
    const { email, password, passwordConfirmation } = this.props;

    const inputIcon = () => {
        if (password && passwordConfirmation) {
          if (password === passwordConfirmation) {
            return 'lock-outline';
          }
        }
        return 'lock-open';
    };

    return (
      <View>
        <Input
          placeholder="Email"
          icon="person-outline"
          onChangeText={value => this.props.registerFieldUpdate({ prop: 'email', value })}
          value={email}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Input
          placeholder="Password"
          icon={inputIcon()}
          onChangeText={value => this.props.registerFieldUpdate({ prop: 'password', value })}
          value={password}
          secureTextEntry
        />

        <Input
          placeholder="Password Confirmation"
          icon={inputIcon()}
          onChangeText={value =>
            this.props.registerFieldUpdate({ prop: 'passwordConfirmation', value })}
          value={passwordConfirmation}
          secureTextEntry
        />
      </View>
    );
  }
}

const mapStateToProps = ({ register }) => {
  const { email, password, passwordConfirmation, error, loading } = register;
  return { email, password, passwordConfirmation, error, loading };
};

export default connect(mapStateToProps, { registerFieldUpdate })(RegisterForm);

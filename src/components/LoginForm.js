import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, BlueButton, Button, Input, LogoTopMiddle, Spinner } from './common';
import { authFieldUpdate, loginUser, navigateToPasswordReset } from '../actions';

class LoginForm extends Component {
  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  navigateToRegister() {
    Actions.registerForm();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <BlueButton
        onPress={this.onButtonPress.bind(this)}
      >
        <Icon name="input" size={16} /> {_.toUpper('Sign In')}
      </BlueButton>
    );
  }

  render() {
    const { bottomTextContainer, centerText, errorTextStyle, forgotPasswordText } = styles;
    return (
      <Container>
        <LogoTopMiddle />
        <Input
          placeholder="Email"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'email', value })}
          value={this.props.email}
          autoCapitalize="none"
          icon="person-outline"
          keyboardType="email-address"
        />

        <Input
          placeholder="Password"
          onChangeText={value => this.props.authFieldUpdate({ prop: 'password', value })}
          value={this.props.password}
          icon="lock-outline"
          secureTextEntry
        />

        <Text
          style={forgotPasswordText}
          onPress={() => this.props.navigateToPasswordReset()}
        >
          Forgot password?
        </Text>

        <Text style={errorTextStyle}>{this.props.error}</Text>

        {this.renderButton()}

        <Button
          onPress={this.navigateToRegister.bind(this)}
        >
          <Icon name="person-add" size={16} /> {_.toUpper('Register')}
        </Button>

        <View style={bottomTextContainer}>
          <Text style={centerText}>
            Registration is required to save and edit calculations.
          </Text>
        </View>
      </Container>
    );
  }
}

const styles = {
  bottomTextContainer: {
    justifyContent: 'center',
    marginTop: 25
  },
  centerText: {
    textAlign: 'center'
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  forgotPasswordText: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: 'gray'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, {
  authFieldUpdate,
  loginUser,
  navigateToPasswordReset
})(LoginForm);

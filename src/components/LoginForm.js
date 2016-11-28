import React, { Component } from 'react';
import { Text, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Container, BlueButton, Input, LogoTopMiddle, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    // Redux way of saying dispatch actionCreate to do this.setState({ email })
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <BlueButton
      onPress={this.onButtonPress.bind(this)}
      >
      {_.toUpper('Sign In')}
    </BlueButton>
    );
  }

  render() {
    const { bottomTextContainer, centerText, errorTextStyle } = styles;
    return (
      <Container>
        <LogoTopMiddle />
        <Input
          placeholder="Email"
          onChangeText={this.onEmailChange.bind(this)}
          value={this.props.email}
        />

        <Input
          placeholder="Password"
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
          secureTextEntry
        />

        <Text style={errorTextStyle}>{this.props.error}</Text>

        {this.renderButton()}

        <View style={bottomTextContainer}>
          <Text style={centerText}>
            Registration is required to save, edit and share calculations. To us
            e the calculator without registering, click here.
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
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);

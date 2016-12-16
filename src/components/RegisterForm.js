import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Input, BlueButton, Container, LogoTopMiddle, Spinner } from './common';
import { registerFieldUpdate, registerUser } from '../actions';

class RegisterForm extends Component {
  onButtonPress() {
    const { email, password, passwordConfirmation } = this.props;

    this.props.registerUser({ email, password, passwordConfirmation });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <BlueButton
        onPress={this.onButtonPress.bind(this)}
      >
        <Icon name="person-add" size={16} /> {_.toUpper('Register')}
      </BlueButton>
    );
  }

  render() {
    console.log(this.props.error);
    const { errorTextStyle } = styles;
    return (
      <Container>
        <LogoTopMiddle />

        <Input
          placeholder="Email"
          icon="person-outline"
          onChangeText={value => this.props.registerFieldUpdate({ prop: 'email', value })}
          value={this.props.email}
        />

        <Input
          placeholder="Password"
          icon="lock-outline"
          onChangeText={value => this.props.registerFieldUpdate({ prop: 'password', value })}
          value={this.props.password}
          secureTextEntry
        />

        <Input
          placeholder="Password Confirmation"
          icon="lock-open"
          onChangeText={value =>
            this.props.registerFieldUpdate({ prop: 'passwordConfirmation', value })}
          value={this.props.passwordConfirmation}
          secureTextEntry
        />

        <Text style={errorTextStyle}>{this.props.error}</Text>

        {this.renderButton()}

      </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ register }) => {
  const { email, password, passwordConfirmation, error, loading } = register;

  return {
    email,
    password,
    passwordConfirmation,
    error,
    loading
  };
};

export default connect(mapStateToProps, { registerFieldUpdate, registerUser })(RegisterForm);

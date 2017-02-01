import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import _ from 'lodash';
import { BlueButton, Container, LogoTopMiddle, Spinner, FlashMessages } from './common';
import { registerFieldUpdate, registerUser } from '../actions';
import RegisterForm from './RegisterForm';

class Register extends Component {
  onButtonPress() {
    const { email, password, passwordConfirmation } = this.props;
    this.props.registerUser({ email, password, passwordConfirmation });
  }

  render() {
    const { loading, error } = this.props;

    const renderButton = () => {
      if (loading) {
        return <Spinner />;
      }

      return (
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name="person-add" size={16} /> {_.toUpper('Register')}
        </BlueButton>
      );
    };

    return (
      <Container>
        <LogoTopMiddle />

        <RegisterForm {...this.props} />

        <FlashMessages error={error} />

        {renderButton()}

      </Container>
    );
  }
}

const mapStateToProps = ({ register }) => {
  const { email, password, passwordConfirmation, error, loading } = register;
  return { email, password, passwordConfirmation, error, loading };
};

export default connect(mapStateToProps, { registerFieldUpdate, registerUser })(Register);

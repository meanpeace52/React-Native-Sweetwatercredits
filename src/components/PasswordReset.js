import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { authFieldUpdate } from '../actions';
import { Container, BlueButton, LogoTopMiddle } from './common';
import PasswordResetForm from './PasswordResetForm';

class PasswordReset extends Component {
  render() {
    const submitFormReady = () => {
        const { code, password, password_confirmation } = this.props;
        if (code && password && password_confirmation) {
          return false;
        }
        return true;
    };

    const { keyboardStyles } = styles;
    return (

        <Container>
          <KeyboardAvoidingView
            behavior='padding'
            style={keyboardStyles}
          >
            <LogoTopMiddle />

            <PasswordResetForm {...this.props} />

            <BlueButton
              inactive={submitFormReady()}
            >
              <Icon name="lock-outline" size={18} /> Reset Password
            </BlueButton>
          </KeyboardAvoidingView>
        </Container>
    );
  }
}

const styles = {
  keyboardStyles: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80,
  }
};

const mapStateToProps = state => {
  const { code, password, password_confirmation, error } = state.auth;
  return { code, password, password_confirmation, error };
}

export default connect(mapStateToProps, { authFieldUpdate })(PasswordReset);

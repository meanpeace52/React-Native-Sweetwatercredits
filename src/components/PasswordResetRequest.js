import React, { Component } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { authFieldUpdate, sendPasswordResetEmail } from '../actions';
import { Container, BlueButton, LogoTopMiddle, Spinner } from './common';
import PasswordResetRequestForm from './PasswordResetRequestForm';

class PasswordResetRequest extends Component {
  onButtonPress() {
    const { email } = this.props;
    this.props.sendPasswordResetEmail({ email });
  }

  renderButton() {
    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    }

    return (
      <BlueButton
        onPress={this.onButtonPress.bind(this)}
      >
        <Icon name="send" size={18} /> Send Reset Email
      </BlueButton>
    );
  }

  render() {
    const { errorText, keyboardStyles } = styles;
    return (

        <Container>
          <KeyboardAvoidingView
            behavior='padding'
            style={keyboardStyles}
          >
            <LogoTopMiddle />

            <Text style={{ paddingTop: 15, paddingBottom: 15 }}>
              Enter your email below to request a password reset. We will send you and email with instructions to reset your password.
            </Text>

            <PasswordResetRequestForm {...this.props} />

            <Text style={errorText}>{this.props.error}</Text>

            {this.renderButton()}

          </KeyboardAvoidingView>
        </Container>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
  keyboardStyles: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, error, loading } = auth;
  return { email, error, loading };
};

export default connect(mapStateToProps,
  { authFieldUpdate, sendPasswordResetEmail })(PasswordResetRequest);

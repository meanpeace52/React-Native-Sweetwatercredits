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

  render() {
    const { errorText, keyboardStyles, padding15TopAndBottom } = styles;
    const { error, loading } = this.props;

    // Render button or spinner based on value in loading flag
    const renderButton = () => {
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

    return (

        <Container>
          <KeyboardAvoidingView
            behavior='padding'
            style={keyboardStyles}
          >
            <LogoTopMiddle />

            <Text style={padding15TopAndBottom}>
              Enter your email below to request a password reset. We will send you and email with instructions to reset your password.
            </Text>

            <PasswordResetRequestForm {...this.props} />

            <Text style={errorText}>{error}</Text>

            {renderButton()}

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
  },
  padding15TopAndBottom: {
    paddingTop: 15,
    paddingBottom: 15
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, error, loading } = auth;
  return { email, error, loading };
};

export default connect(mapStateToProps,
  { authFieldUpdate, sendPasswordResetEmail })(PasswordResetRequest);

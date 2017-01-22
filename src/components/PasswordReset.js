import React, { Component } from 'react';
import { KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { authFieldUpdate, updatePassword } from '../actions';
import { Container, BlueButton, LogoTopMiddle, Spinner } from './common';
import PasswordResetForm from './PasswordResetForm';

class PasswordReset extends Component {
  onButtonPress() {
      const { password, newPassword } = this.props;
      this.props.updatePassword({ password, newPassword });
  }

  render() {
    console.log(this.props);
    const submitFormReady = () => {
        const { password, newPassword, newPasswordConfirm } = this.props;
        if (password && newPassword && newPasswordConfirm) {
          return false;
        }
        return true;
    };

    const renderButton = () => {
      const { loading } = this.props;
      if (loading) {
        return <Spinner />;
      }

      return (
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
          inactive={submitFormReady()}
        >
          <Icon name="lock-outline" size={18} /> Reset Password
        </BlueButton>
      );
    };

    const { keyboardStyles, errorText, messageText } = styles;
    return (

        <Container>
          <KeyboardAvoidingView
            behavior='padding'
            style={keyboardStyles}
          >
            <LogoTopMiddle />

            <PasswordResetForm {...this.props} />

            <Text
              style={errorText}
            >
              {this.props.error}
            </Text>

            <Text style={messageText}> {this.props.notice}</Text>


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
  messageText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green'
  },
  keyboardStyles: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 80
  }
};

const mapStateToProps = ({ auth }) => {
  const { password, newPassword, newPasswordConfirm, error, notice } = auth;
  return { password, newPassword, newPasswordConfirm, error, notice };
};

export default connect(mapStateToProps, { authFieldUpdate, updatePassword })(PasswordReset);

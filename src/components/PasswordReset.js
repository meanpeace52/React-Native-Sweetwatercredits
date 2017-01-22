import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { authFieldUpdate, updatePassword } from '../actions';
import { Container, BlueButton, LogoTopMiddle, Spinner, FlashMessages } from './common';
import PasswordResetForm from './PasswordResetForm';

class PasswordReset extends Component {
  onButtonPress() {
      const { password, newPassword } = this.props;
      this.props.updatePassword({ password, newPassword });
  }

  render() {
    // Set button inactive status based on form inputs
    const submitFormReady = () => {
        const { password, newPassword, newPasswordConfirm } = this.props;
        if (password && newPassword && newPasswordConfirm) {
          return false;
        }
        return true;
    };

    // Render button or spinner dependent on loading flag
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

    const { keyboardStyles } = styles;
    const { error, notice } = this.props;
    return (

        <Container>
          <KeyboardAvoidingView
            behavior='padding'
            style={keyboardStyles}
          >
            <LogoTopMiddle />

            <PasswordResetForm {...this.props} />

            <FlashMessages error={error} notice={notice} />

            {renderButton()}
          </KeyboardAvoidingView>
        </Container>
    );
  }
}

const styles = {
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

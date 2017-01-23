import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

    const { error, notice } = this.props;
    return (
      <KeyboardAwareScrollView>
        <Container>
          <LogoTopMiddle />

          <PasswordResetForm {...this.props} />

          <FlashMessages error={error} notice={notice} />

          {renderButton()}

          <View style={{ paddingTop:15 }} />

        </Container>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { password, newPassword, newPasswordConfirm, error, notice } = auth;
  return { password, newPassword, newPasswordConfirm, error, notice };
};

export default connect(mapStateToProps, { authFieldUpdate, updatePassword })(PasswordReset);

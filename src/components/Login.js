import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Container, BlueButton, Button, LogoTopMiddle, Spinner, FlashMessages } from './common';
import { authFieldUpdate, loginUser, navigateToAuthUpdateForm } from '../actions';
import LoginForm from './LoginForm';

class Login extends Component {
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    const {
      bottomTextContainer,
      centerText,
      forgotPasswordText } = styles;
    const { error, notice, loading } = this.props;

    // Render button or spinner based on value in loading flag
    const renderButton = () => {
      if (loading) {
        return <Spinner />;
      }

      return (
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name="input" size={16} /> {_.toUpper('Sign In')}
        </BlueButton>
      );
    };

    return (
      <KeyboardAwareScrollView>
        <Container>
          <LogoTopMiddle />

          <LoginForm {...this.props} />

          <Text
            style={forgotPasswordText}
            onPress={() => Actions.passwordResetRequest()}
          >
            Forgot password?
          </Text>

          <FlashMessages error={error} notice={notice} />

          {renderButton()}

          <Button
            onPress={() => Actions.register()}
          >
            <Icon name="person-add" size={16} /> {_.toUpper('Register')}
          </Button>

          <View style={bottomTextContainer}>
            <Text style={centerText}>
              Registration is required to save and edit calculations.
            </Text>
          </View>
        </Container>
      </KeyboardAwareScrollView>
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
  forgotPasswordText: {
    fontSize: 16,
    alignSelf: 'flex-end',
    color: 'gray'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, notice } = auth;
  return { email, password, error, loading, notice };
};

export default connect(mapStateToProps, {
  authFieldUpdate,
  loginUser,
  navigateToAuthUpdateForm
})(Login);

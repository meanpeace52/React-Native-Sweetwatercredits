import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { BlueButton, Container, SplashImageContainer, YellowButton, Input } from './common';


class Splash extends Component {
  render() {
    const navigateToLoginForm = () => Actions.loginForm();

    return (
      <SplashImageContainer>
        <BlueButton
          onPress={navigateToLoginForm}
        >
          {_.toUpper('Calculate Credits')}
        </BlueButton>

        <YellowButton
          onPress={navigateToLoginForm}
        >
          {_.toUpper('Sign In')}
        </YellowButton>
      </SplashImageContainer>
    );
  }
}

export default Splash;

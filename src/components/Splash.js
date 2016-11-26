import React, { Component } from 'react';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
  render () {
    const navigateToProjects = () => Actions.projects();
    const navigateToLoginForm = () => Actions.projects();
    return (
      <SplashImageContainer>
        <BlueButton onPress={navigateToProjects}>
          {_.toUpper('Start Calculating Credits')}
        </BlueButton>

        <YellowButton onPress={navigateToLoginForm}>
          {_.toUpper("Sign In")}
        </YellowButton>

      </SplashImageContainer>
    )
  }
}

export default Splash;

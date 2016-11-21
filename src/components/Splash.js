import React, { Component } from 'react';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
  render () {
    const navigateToProjects = () => Actions.projects();
    return (
      <SplashImageContainer>
        <BlueButton onPress={navigateToProjects}>
          {_.toUpper('Start Calculating Credits')}
        </BlueButton>

        <YellowButton>
          {_.toUpper("Sign In - Coming Soon!")}
        </YellowButton>

      </SplashImageContainer>
    )
  }
}

export default Splash;

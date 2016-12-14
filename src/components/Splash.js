import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { BlueButton, SplashImageContainer, YellowButton } from './common';


class Splash extends Component {
  render() {
    // const navigateToProjects = () => Actions.projects();
    const navigateToLoginForm = () => Actions.loginForm();
    return (
      <SplashImageContainer>
        <BlueButton onPress={navigateToLoginForm}>
          <Icon name='keyboard' size={18} /> {_.toUpper('Calculate Credits')}
        </BlueButton>

        {
          //<YellowButton onPress={navigateToLoginForm}>
            //<Icon name='person' size={18} /> {_.toUpper('Sign In')}
          //</YellowButton>
        }
      </SplashImageContainer>
    );
  }
}

export default Splash;

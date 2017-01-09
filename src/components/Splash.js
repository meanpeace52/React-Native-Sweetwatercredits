import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { connect } from 'react-redux';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import { checkIfLoggedIn } from '../actions';

class Splash extends Component {
  componentWillMount() {
    this.props.checkIfLoggedIn();
  }

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

// export default Splash;
export default connect(null, { checkIfLoggedIn })(Splash);

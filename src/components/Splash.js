import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import { checkIfLoggedIn } from '../actions';

class Splash extends Component {
  navigateToLoginForm() {
    this.props.checkIfLoggedIn();
  }

  render() {
    return (
      <SplashImageContainer>
        <BlueButton
          onPress={this.navigateToLoginForm.bind(this)}
        >
          {_.toUpper('Calculate Credits')}
        </BlueButton>

        <YellowButton
          onPress={this.navigateToLoginForm.bind(this)}
        >
          {_.toUpper('Sign In')}
        </YellowButton>
      </SplashImageContainer>
    );
  }
}

// export default Splash;
export default connect(null, { checkIfLoggedIn })(Splash);

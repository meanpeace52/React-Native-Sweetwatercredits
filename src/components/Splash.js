import React, { Component } from 'react';
import { Text, View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import { checkIfLoggedIn } from '../actions';

class Splash extends Component {
  navigateToLogin() {
    this.props.checkIfLoggedIn();
  }

  render() {
    const { tutorialButton } = styles;
    return (
      <SplashImageContainer>
        <BlueButton
          onPress={this.navigateToLogin.bind(this)}
        >
          {_.toUpper('Calculate Credits')}
        </BlueButton>

        <YellowButton
          onPress={this.navigateToLogin.bind(this)}
        >
          {_.toUpper('Sign In')}
        </YellowButton>

        <Text
          style={tutorialButton}
          onPress={() => Actions.tutorial()}
        >
          First time user?
        </Text>



      </SplashImageContainer>
    );
  }
}

const styles = {
  tutorialButton: {
    color: 'white',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    textAlign: 'right',
    fontWeight: 'bold',
    paddingTop: 10
  }
};

export default connect(null, { checkIfLoggedIn })(Splash);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from 'lodash';
import { BlueButton, SplashImageContainer, YellowButton } from './common';


class Splash extends Component {
  render() {
    const navigateToLoginForm = () => Actions.loginForm();

    return (
      <View>
        <Text> Splash </Text>

      </View>
    );
  }
}

export default Splash;

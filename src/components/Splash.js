import React, { Component } from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { BlueButton, SplashImageContainer, YellowButton } from './common';
import { checkIfLoggedIn } from '../actions';
import AboutModalContent from './AboutModalContent';

class Splash extends Component {
  state = { showModal: false };

  onClose() {
    this.setState({ showModal: false });
  }

  navigateToLogin() {
    this.props.checkIfLoggedIn();
  }

  render() {
    const { tutorialButton, modalCloseText } = styles;
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

        <Text
          style={tutorialButton}
          onPress={() => this.setState({ showModal: !this.state.showModal })}
        >
          About SRC
        </Text>

        <Modal
          visible={this.state.showModal}
          animationType="slide"
          onRequestClose={() => {}} // require prop for android
          // TODO: refactor into own component
        >

          <TouchableOpacity
            onPress={this.onClose.bind(this)}
          >
            <Text
              style={modalCloseText}
            >
              DONE
            </Text>
          </TouchableOpacity>

          <AboutModalContent {...this.props} />
        </Modal>
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
  },
  modalCloseText: {
    paddingTop: 22,
    paddingRight: 10,
    textAlign: 'right',
    color: '#007aff',
    fontSize: 16
  }
};

export default connect(null, { checkIfLoggedIn })(Splash);

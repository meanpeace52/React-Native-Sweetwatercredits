import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, BlueButton, Input, LogoTopMiddle, Spinner, YellowButton } from './common';
import _ from 'lodash';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', passsword: '', error: '', loading: false}

  onButtonPress() {
    const { email, password } = this.state;
    // clear state.error, and show loading = true
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password).catch( () => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch( () => {
        // Show error because sign in and sign up failed
        this.setState({ error: 'Authentication failed.' })
      });
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <BlueButton
        onPress={this.onButtonPress.bind(this)}>
        {_.toUpper('SignIn')}
      </BlueButton>
    );
  }

  render() {
    const { bottomTextContainer, errorTextStyle, centerText } = styles;

    return (
      <Container>
        <LogoTopMiddle/>
        <Input
          placeholder="Email"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <Input
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry/>

        <Text style={errorTextStyle}>
          {this.state.error}
        </Text>

        {this.renderButton()}

        <View style={bottomTextContainer}>
          <Text style={centerText}>
            Registration is required to save, edit and share calculations. To use the calculator without registering, click here.
          </Text>
        </View>
      </Container>
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
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;

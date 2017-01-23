
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CardSection, Button } from './common';
import { logoutUser, navigateToPasswordReset, navigateToEmailReset } from '../actions';

class SettingsList extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ paddingTop: 65 }} />
          <Container>

            <CardSection>
              <Button onPress={() => this.props.logoutUser()}>
                <Icon name="exit-to-app" size={16} /> Logout
              </Button>
            </CardSection>

            <CardSection>
              <Button onPress={() => Actions.tutorial()}>
                <Icon name="directions-run" size={16} /> Tutorial
              </Button>
            </CardSection>

            <CardSection>
              <Button
                onPress={() => this.props.navigateToEmailReset()}
              >
                <Icon name="person-outline" size={16} /> Change Email
              </Button>
            </CardSection>

            <CardSection>
              <Button onPress={() => this.props.navigateToPasswordReset()}>
                <Icon name="lock-outline" size={16} /> Change Password
              </Button>
            </CardSection>

            <CardSection>
              <Button onPress={() => Actions.about()}>
                <Icon name="info-outline" size={16} /> About Sweetwater
              </Button>
            </CardSection>

          </Container>
        </ScrollView>
      </View>
    );
  }
}

export default connect(null,
  { logoutUser, navigateToPasswordReset, navigateToEmailReset })(SettingsList);

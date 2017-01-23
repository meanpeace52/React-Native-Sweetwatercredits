import React, { Component } from 'react';
import { View, ScrollView, Modal, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CardSection, Button } from './common';
import { logoutUser, navigateToPasswordReset, navigateToEmailReset } from '../actions';
import AboutModalContent from './AboutModalContent';

class SettingsList extends Component {
  state = { showModal: false };

  onClose() {
    this.setState({ showModal: false });
  }

  render() {
    const { modalCloseText } = styles;
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
              <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                <Icon name="info-outline" size={16} /> About Sweetwater
              </Button>
            </CardSection>

            <Modal
              visible={this.state.showModal}
              animationType="slide"
              onRequestClose={() => {}} // require prop for android
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

          </Container>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  modalCloseText: {
    paddingTop: 22,
    paddingRight: 10,
    textAlign: 'right',
    color: '#007aff',
    fontSize: 16
  }
};

export default connect(null,
  { logoutUser, navigateToPasswordReset, navigateToEmailReset })(SettingsList);

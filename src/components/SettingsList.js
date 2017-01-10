import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, CardSection, Button } from './common';
import { logoutUser } from '../actions';

class SettingsList extends Component {
  onButtonPress() {
      this.props.logoutUser();
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ paddingTop: 65 }} />
          <Container>

            <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                <Icon name="exit-to-app" size={16} /> Logout
              </Button>
            </CardSection>

          </Container>
        </ScrollView>
      </View>
    );
  }
}

export default connect(null, { logoutUser })(SettingsList);

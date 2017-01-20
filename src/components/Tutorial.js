import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Tutorial extends Component {
  render() {
    const { closeIcon } = styles;
    return (
      <Swiper
        // style={wrapper}
        // showsButtons={true}
        activeDotColor="#FFC107"
        // nextButton={<Text style={buttonText}>›</Text>}
        // prevButton={<Text style={buttonText}>‹</Text>}
      >
        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Signin_Register.png')} />
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Projects.png')} />
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Project_Create.png')} />
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Disturbance.png')} />
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_ZoneType.png')} />
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Delete_Disturbance.png')}>
            <View>
              <TouchableOpacity
                onPress={() => Actions.pop()}
              >
                <Text
                  style={closeIcon}
                >
                  <Icon name="close" size={40} />
                </Text>
              </TouchableOpacity>
            </View>
          </Image>
        </View>
      </Swiper>
    );
  }
}

const styles = {
  closeIcon: {
    paddingTop: 20,
    paddingRight: 10,
    color: '#FFC107',
    textAlign: 'right'
  }
};

export default Tutorial;

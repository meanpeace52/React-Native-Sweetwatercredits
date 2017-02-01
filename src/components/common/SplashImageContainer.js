import React from 'react';
import { Image, Text, View, Dimensions } from 'react-native';

const SplashImageContainer = (props) => {
  const { splash, main, logo, underLogoText } = styles;
  return (
    <Image source={require('../images/sage-bg.jpg')} style={splash}>
      <View style={main}>
        <Image
          source={require('../images/logo-impression.png')}
          style={logo}
        />

        <Text style={underLogoText}>
          Greater Sage-Grouse Credit Calculator
        </Text>

        {props.children}
      </View>
    </Image>
  );
};


const windowDims = Dimensions.get('window');
const styles = {
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: windowDims.height / 5
  },
  splash: {
    flex: 1,
    backgroundColor: 'transparent',
    height: windowDims.height,
    width: windowDims.width
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  underLogoText: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6
  }
};

export { SplashImageContainer };

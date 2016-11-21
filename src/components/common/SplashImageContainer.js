import React from 'react';
import { Image, Text, View } from 'react-native';

const SplashImageContainer = (props) => {
  const { splash } = styles;

  return (
    <Image source={require('../images/sage-bg.jpg')} style={splash}>
      <View style={styles.main}>
        <Image
          source={require('../images/logo-impression.png')}
          style={styles.logo} />

        <Text style={styles.underLogoText}>
          Greater Sage-Grouse Credit Calculator
        </Text>

        {props.children}
      </View>
    </Image>
  );
};

const styles = {
  logo: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 200
  },
  splash: {
    backgroundColor: 'transparent',
    flex: 1,
    height: undefined,
    width: undefined
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
  },
  viewText: {
    marginTop: 70
  }
};

export { SplashImageContainer };

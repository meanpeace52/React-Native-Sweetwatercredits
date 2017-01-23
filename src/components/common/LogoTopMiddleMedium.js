import React from 'react';
import { Image, View } from 'react-native';

const LogoTopMiddleMedium = (props) => {
  const { logo, logoNavContainer } = styles;

  return (
    <View style={logoNavContainer}>
      <Image style={logo} source={require('../images/sweetwater-conservancy-logo.png')} />
      {props.children}
    </View>
  );
};

const styles = {
  logoNavContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    paddingTop: 35
  },
  logo: {
    height: 92,
    width: 161
  }
};

export { LogoTopMiddleMedium };

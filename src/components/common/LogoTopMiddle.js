import React from 'react';
import { Image, View } from 'react-native';

const LogoTopMiddle = (props) => {
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
    marginBottom: 40,
    paddingTop: 95
  },
  logo: {
    height: 92,
    width: 161
  }
};

export { LogoTopMiddle };

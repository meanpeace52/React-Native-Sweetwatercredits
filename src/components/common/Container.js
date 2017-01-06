import React from 'react';
import { View } from 'react-native';

const Container = (props) => {
  const { containerStyles } = styles;
  return (
    <View style={containerStyles}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyles: {
    marginLeft: 25,
    marginRight: 25
  }
};

export { Container };

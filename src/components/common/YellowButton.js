import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const YellowButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFC107',
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  },
  textStyle: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold'
  }
};

export { YellowButton };

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
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    // flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFC107',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    elevation: 1,
    marginTop: 5
  }
};

export { YellowButton };

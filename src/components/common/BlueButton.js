import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BlueButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;


  return (
    <TouchableHighlight
      style={buttonStyle}
      onPress={onPress}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  )

  // return (
  //   <TouchableOpacity onPress={onPress} style={buttonStyle}>
  //     <Text style={textStyle}>
  //       {children}
  //     </Text>
  //   </TouchableOpacity>
  // );
};

const styles = {
  buttonStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#3F51B5',
    borderRadius: 2,
    height: 44,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    width: 300
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: '400'
  }
};

export { Button };

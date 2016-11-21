import React from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TouchableHighlight>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </TouchableHighlight>
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 30,
    width: 300
  },
  containerStyle: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10
  }
};

export { Input };

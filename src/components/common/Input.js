import React from 'react';
import { TextInput, View, TouchableHighlight, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Input = ({ icon, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View>
      <View style={containerStyle}>
        <Icon name={icon} size={36} color="lightgray" />
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
    </View>
  );
};

const styles = {
  inputStyle: {
    height: 45,
    width: 300,
    fontSize: 20,
    paddingLeft: 25
  },
  containerStyle: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row'
  }
};

export { Input };

import React from 'react';
import { View, Text } from 'react-native';

const FlashMessages = ({ error, notice }) => {
  const { noticeText, errorText } = styles;
  return (
    <View>
      <Text style={errorText}>{error}</Text>
      <Text style={noticeText}> {notice}</Text>
    </View>

  );
};

const styles = {
  errorText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  },
  noticeText: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green'
  },
};

export { FlashMessages };

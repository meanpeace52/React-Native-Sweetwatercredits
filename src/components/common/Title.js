import React from 'react';
import { Text } from 'react-native';

const Title = (props) => {
  const { titleStyle } = styles;

  return (
    <Text style={titleStyle}>
      {props.children}
    </Text>
  );
}

const styles = {
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  }
};

export { Title };

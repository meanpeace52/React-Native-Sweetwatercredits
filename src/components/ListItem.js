import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from './common';

class ListItem extends Component {
  render() {
    const { name } = this.props.project;
    return (
      <Container>
       <Text style={styles.titleStyle}>
        {name}
       </Text>
      </Container>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;

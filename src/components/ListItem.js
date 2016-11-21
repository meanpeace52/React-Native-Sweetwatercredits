import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from './common';

class ListItem extends Component {
  render() {
   return (
     <Container>
       <Text>{this.props.project.name}</Text>
     </Container>
   );
 }
}

export default ListItem;

import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { BlueButton, Container, LogoTopLeft } from './common';
import { Actions } from 'react-native-router-flux';
import ListItem from './ListItem'

class RecentProjects extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // If this.props.projects is undefined, render an empty array (null)
    this.dataSource = ds.cloneWithRows(this.props.projects || []);
  }

  renderRow(project) {
     return <ListItem/>
  }

  checkThenRenderContent() {
    const { projects } = this.props;
    if (projects !== undefined) {
      return (
        <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        enableEmptySections={true}/>
      );
    } else {
      return (
        <Text style={{alignSelf: "center"}}>There are currently no projects.</Text>
      );
    }
  }

  render() {
    return (
      <Container>
        <LogoTopLeft/>
        {this.checkThenRenderContent()}
      </Container>
    );
  }
}

export default RecentProjects;

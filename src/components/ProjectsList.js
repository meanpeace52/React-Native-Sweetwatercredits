import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Card, Container, LogoTopMiddle } from './common';
import ProjectListItem from './ProjectListItem';
import { projectsFetch, projectNew } from '../actions';

class ProjectsList extends Component {
  componentWillMount() {
    this.props.projectsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onButtonPress() {
      this.props.projectNew();
  }

  createDataSource({ projects }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(projects);
  }

  renderRow(project) {
    return <ProjectListItem project={project} />;
  }

  render() {
    return (
      <View>
        <LogoTopMiddle />

        <Container>
          <BlueButton
            onPress={this.onButtonPress.bind(this)}
          >
            <Icon name='add' size={18} />
            Add Project
          </BlueButton>

          <Card>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
          </Card>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = state => {
  //  state.projects is an object with many key mvalue pairs.
  //  for each value, run the fat arrrow function
  const projects = _.map(state.projects, (val, uid) => {
    return { ...val, uid }; // { name: 'testproj', id: 'dasd23190dfe90d'};
  });

  return { projects };
};


export default connect(mapStateToProps, { projectsFetch, projectNew })(ProjectsList);

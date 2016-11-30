import React, { Component } from 'react';
import { ListView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, LogoTopMiddle, Title } from './common';
import ProjectListItem from './ProjectListItem';
import { projectsFetch } from '../actions';

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
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
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


export default connect(mapStateToProps, { projectsFetch })(ProjectsList);

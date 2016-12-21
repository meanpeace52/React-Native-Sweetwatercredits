import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Container, LogoTopMiddle, Card } from './common';
import DisturbanceListItem from './DisturbanceListItem';
import { disturbancesFetch } from '../actions';

class DisturbancesList extends Component {
  componentWillMount() {
    this.props.disturbancesFetch({ projectUid: this.props.project.uid || this.props.projectUid });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onButtonPress() {
    const { project } = this.props;
    Actions.disturbanceCreate({ project });
  }

  createDataSource({ disturbances }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(disturbances);
  }

  navigateToProjectCreate() {
    Actions.projectCreate();
  }

  renderRow(disturbance) {
    return <DisturbanceListItem disturbance={disturbance} />;
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <LogoTopMiddle />
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name="add" size={18} /> Add Disturbance
        </BlueButton>

        <Card>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Card>

      </Container>
    );
  }
 }

const mapStateToProps = state => {
  const disturbances = _.map(state.disturbances, (val, uid) => {
    return { ...val, uid };
  });

  return { disturbances };
};


export default connect(mapStateToProps, { disturbancesFetch })(DisturbancesList);

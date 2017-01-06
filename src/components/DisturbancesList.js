import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
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

  sumPenaltys() {
    const { disturbances } = this.props;
    const disturbancesPenaltyTotal =
      disturbances.reduce((acc, disturbance) => acc + parseInt(disturbance.penaltyAmount, 10), 0);
    return disturbancesPenaltyTotal;
  }

  renderRow(disturbance) {
    return <DisturbanceListItem disturbance={disturbance} />;
  }

  render() {
    const { penaltyText } = styles;
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

        <Text style={penaltyText}> Total Credit Amount: {this.sumPenaltys()}</Text>
      </Container>
    );
  }
 }

const styles = {
  penaltyText: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 15
  }
};

const mapStateToProps = state => {
  const disturbances = _.map(state.disturbances, (val, uid) => {
    return { ...val, uid };
  });

  return { disturbances };
};

export default connect(mapStateToProps, { disturbancesFetch })(DisturbancesList);

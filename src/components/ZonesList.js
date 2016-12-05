import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { BlueButton, Card, Container, LogoTopMiddle } from './common';
import { zonesFetch } from '../actions';
import ZoneListItem from './ZoneListItem';


class ZonesList extends Component {
  componentWillMount() {
    const { projectUid } = this.props;
    this.props.zonesFetch({ projectUid });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onButtonPress() {
    const { projectUid } = this.props;
    Actions.zoneCreate({ projectUid });
  }

  createDataSource({ zones }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(zones);
  }

  sumZoneViolations() {
    let sumPenaltys = 0;
    const { zones } = this.props;
    if (typeof zones !== 'undefined') {
      for (const i in zones) {
        if ({}.hasOwnProperty.call(zones, i)) {
          const zone = zones[i];
          const { ruleViolations } = zone;
          if (typeof ruleViolations !== 'undefined') {
            for (const j in ruleViolations) {
              if ({}.hasOwnProperty.call(ruleViolations, j)) {
                sumPenaltys += parseInt(ruleViolations[j].penalty, 10);
              }
            }
          }
        }
      }
    }

    return sumPenaltys;
  }

  renderRow(zone) {
    return <ZoneListItem zone={zone} />;
  }

  render() {
    const { creditTotal } = styles;
    return (
      <View>
        <LogoTopMiddle />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='add' size={18} /> Add Zone
        </BlueButton>

          <Container>
            <Card>
              <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
              />
            </Card>
          </Container>
          <Text style={creditTotal}>Zone Credit Total: {this.sumZoneViolations()}</Text>
      </View>
    );
  }
}

const styles = {
  creditTotal: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15
  }
};

const mapStateToProps = state => {
  //  state.projects is an object with many key mvalue pairs.
  //  for each value, run the fat arrrow function
  const zones = _.map(state.zones, (val, uid) => {
    return { ...val, uid }; // { name: 'testproj', id: 'dasd23190dfe90d'};
  });

  return { zones };
};

export default connect(mapStateToProps, { zonesFetch })(ZonesList);

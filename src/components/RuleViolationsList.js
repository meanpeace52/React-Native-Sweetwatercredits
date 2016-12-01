import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { BlueButton, Card, Container, LogoTopMiddle } from './common';
import { ruleViolationsFetch } from '../actions';
import RuleViolationListItem from './RuleViolationListItem';


class RuleViolationsList extends Component {
  componentWillMount() {
    console.log(this.props);
    const { projectUid, uid } = this.props.zone;
    this.props.ruleViolationsFetch({ projectUid, zoneUid: uid });
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props
    this.createDataSource(nextProps);
  }

  onButtonPress() {
    const { projectUid, uid } = this.props.zone;
    Actions.ruleViolationCreate({ projectUid, zoneUid: uid });
  }

  createDataSource({ ruleViolations }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(ruleViolations);
  }

  renderRow(ruleViolation) {
    return <RuleViolationListItem ruleViolation={ruleViolation} />;
  }

  render() {
    const { zoneType } = this.props.zone;
    return (
      <View>
        <LogoTopMiddle />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='add' size={14} />
          Add {zoneType} Rule Violation
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  const ruleViolations = _.map(state.ruleViolations, (val, uid) => {
    return { ...val, uid };
  });

  return { ruleViolations };
};

// export default RuleViolationsList;
export default connect(mapStateToProps, { ruleViolationsFetch })(RuleViolationsList);

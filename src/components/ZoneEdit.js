import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { zoneDelete } from '../actions';
import {
          Container,
          Card,
          CardSection,
          BlueButton,
          Confirm,
          YellowButton,
          LogoTopMiddle } from './common';

class ZoneEdit extends Component {
  state = { showModal: false };

  onAccept() {
    const { projectUid, uid } = this.props.zone;
    this.props.zoneDelete({ projectUid, zoneUid: uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navigateToRuleViolations() {
    const { zone } = this.props;
    Actions.ruleViolationsList({ zone });
  }

  render() {
    const { acreage, zoneType } = this.props.zone;
    const { creditTitleStyle, titleStyle, sectionStyle } = styles;
    return (
      <Container>
        <LogoTopMiddle />

        <Card>
          <CardSection style={sectionStyle}>
            <Icon name='landscape' size={50} />
            <View>
              <Text style={titleStyle}> Acreage: {acreage} </Text>
              <Text style={creditTitleStyle}> ZoneType: {zoneType} </Text>
            </View>
          </CardSection>
        </Card>

        <View style={{ paddingTop: 15 }}>
          <BlueButton
            onPress={this.navigateToRuleViolations.bind(this)}
          >
            <Icon name='report-problem' size={18} /> View/Edit Rule Violations
          </BlueButton>

          <YellowButton
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            <Icon name='delete' size={18} /> Delete Zone
          </YellowButton>
        </View>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>

      </Container>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15
  },
  creditTitleStyle: {
    fontSize: 20,
    paddingLeft: 15
  },
  sectionStyle: {
    marginTop: 5
  }
};

const mapStateToProps = (state) => {
  const { acreage, zoneType, projectUid } = state.zoneForm;
  return { acreage, zoneType, projectUid };
};

export default connect(mapStateToProps, { zoneDelete })(ZoneEdit);

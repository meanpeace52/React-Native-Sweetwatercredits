import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import RuleViolationForm from './RuleViolationForm';
import { ruleViolationUpdate, ruleViolationSave } from '../actions';
import { CardSection, BlueButton, Confirm, YellowButton } from './common';

class RuleViolationEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // feed all the project props into the ProjectFormReducer
    _.each(this.props.ruleViolation, (value, prop) => {
      this.props.ruleViolationUpdate({ prop, value });
    });
  }

  onAccept() {
    // const { projectUid, uid } = this.props.zone;
    // this.props.zoneDelete({ projectUid, zoneUid: uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  navigateToRuleViolations() {
    // const { zone } = this.props;
    // Actions.ruleViolationsList({ zone });
  }

  render() {
    return (
      <View style={{ paddingTop: 80 }}>
        <ScrollView>

          <RuleViolationForm {...this.props} />

          <CardSection style={{ justifyContent: 'center' }}>
            <YellowButton
              onPress={() => this.setState({ showModal: !this.state.showModal })}
            >
              <Icon name='delete' size={14} />
              Delete Rule Violation
            </YellowButton>
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { acreage, zoneType, projectUid } = state.zoneForm;
  return { acreage, zoneType, projectUid };
};

export default connect(mapStateToProps, {
  ruleViolationUpdate,
  ruleViolationSave })(RuleViolationEdit);

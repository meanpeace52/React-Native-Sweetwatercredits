import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import _ from 'lodash';
import { CardSection } from './common';
import { ruleViolationDelete } from '../actions';

class RuleViolationListItem extends Component {
  onRowPress() {
    const { ruleViolation } = this.props;
    // delete
    this.props.ruleViolationDelete({ ruleViolation });
  }

  render() {
    const { rule, penalty } = this.props.ruleViolation;
    const { titleStyle, creditTitleStyle } = styles;
    return (

      <View>
        <CardSection style={{ justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Icon name='report-problem' size={50} />
            <View>
              <Text style={titleStyle}> {_.capitalize(rule)} </Text>
              <Text style={creditTitleStyle}> Credits: {penalty.toString()} </Text>
            </View>
          </View>

          <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <Icon name='clear' size={50} style={{ paddingRight: 10 }} />
          </TouchableWithoutFeedback>
        </CardSection>
      </View>
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
  }
};

export default connect(null, { ruleViolationDelete })(RuleViolationListItem);

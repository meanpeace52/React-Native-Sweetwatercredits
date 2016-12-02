import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { CardSection } from './common';


class RuleViolationListItem extends Component {
  onRowPress() {
    const { ruleViolation } = this.props;
    Actions.ruleViolationEdit({ ruleViolation });
  }

  // sumViolations() {
  //   const { ruleViolations } = this.props.zone;
  //   for (let creditVal of Object.values(ruleViolations)) {
  //     console.log(creditVal);
  //   }
  // }

  render() {
    const { rule, penalty } = this.props.ruleViolation;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Icon name='report-problem' size={18} />
            <Text style={titleStyle}> {_.capitalize(rule)} | {penalty.toString()}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default RuleViolationListItem;

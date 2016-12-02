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
    const { titleStyle, rowView } = styles;
    return (

      <View>
        <CardSection>
          <View style={rowView}>
            <Text style={titleStyle}>
              <Icon name='report-problem' size={18} />
              {_.capitalize(rule)} | Credits: {penalty.toString()}
            </Text>
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
              <Icon name='clear' size={18} style={{ paddingRight: 10 }} />
            </TouchableWithoutFeedback>
          </View>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  rowView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};

export default connect(null, { ruleViolationDelete })(RuleViolationListItem);

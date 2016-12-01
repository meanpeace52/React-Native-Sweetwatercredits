import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, View, Text } from 'react-native';
import { Card } from './common';
import { ruleViolationUpdate } from '../actions';

class NonCoreForm extends Component {

  renderViolation() {
      const { rule } = this.props;
      if (rule === 'impact') {
        return (
          <Card>
            <Picker
              style={{ flex: 1 }}
              onValueChange={value => this.props.ruleViolationUpdate({ prop: 'violation', value })}
              selectedValue={this.props.rule}
            >
              <Picker.Item label="Located in a vulnerable landscape?" value="vulnerable" />
              <Picker.Item label="Not Located in a vulneable landscape?" value="non-vulnerable" />
            </Picker>
          </Card>
        );
      } else if (rule === 'timing') {
          return <Text> Should be timing </Text>;
      }
  }

  render() {
    return (
      <View>
        <Card>
          <Picker
            style={{ flex: 1 }}
            onValueChange={value => this.props.ruleViolationUpdate({ prop: 'rule', value })}
            selectedValue={this.props.rule}
          >
            <Picker.Item label="Impact within < 0.25 miles of lek?" value="impact" />
            <Picker.Item label="One year of timing stipulations?" value="timing" />
          </Picker>
        </Card>

        {this.renderViolation()}
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  const { rule, violation, penalty } = state.ruleViolationForm;
  return { rule, violation, penalty };
};

export default connect(mapStateToProps, { ruleViolationUpdate })(NonCoreForm);

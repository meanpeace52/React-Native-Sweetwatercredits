import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker, View } from 'react-native';
import { BlueButton, Card } from './common';
import { ruleViolationUpdate, ruleViolationCreate } from '../actions';

class NonCoreForm extends Component {
  onButtonPress() {
    // Calculate the penalty amount then create the rule violation
    const { rule, violation } = this.props;
    const { acreage, projectUid, uid } = this.props.zone;
    let penaltyAmount = 0;

    if (rule === 'impact') {
      if (violation === 'non-vulnerable') {
        penaltyAmount = 12 * parseInt(acreage, 12);
      } else {
        penaltyAmount = 16 * parseInt(acreage, 10);
      }
    } else {
      penaltyAmount = 10;
    }
    this.props.ruleViolationCreate({ rule, violation, penalty: penaltyAmount, projectUid, zoneUid: uid });
  }

  renderViolationPicker() {
      const { rule } = this.props;
      if (rule === 'impact') {
        return (
          <Card>
            <Picker
              style={{ flex: 1 }}
              onValueChange={value => this.props.ruleViolationUpdate({ prop: 'violation', value })}
              selectedValue={this.props.violation}
            >
              <Picker.Item label="Located in a vulnerable landscape?" value="vulnerable" />
              <Picker.Item label="Not Located in a vulneable landscape?" value="non-vulnerable" />
            </Picker>
          </Card>
        );
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
        {this.renderViolationPicker()}

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='add' size={14} />
          Create Rule Violation
        </BlueButton>
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  const { rule, violation, penalty } = state.ruleViolationForm;
  return { rule, violation, penalty };
};

export default connect(mapStateToProps, { ruleViolationUpdate, ruleViolationCreate })(NonCoreForm);

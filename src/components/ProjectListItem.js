import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ProjectListItem extends Component {
  onRowPress() {
    Actions.projectEdit({ project: this.props.project });
  }

  sumProjectZoneViolations() {
    let sumPenaltys = 0;
    const { zones } = this.props.project;
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

  render() {
    const { name } = this.props.project;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Icon name='domain' size={18} />
            <Text style={titleStyle}> {name} | Credits: {this.sumProjectZoneViolations()}</Text>
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

export default ProjectListItem;

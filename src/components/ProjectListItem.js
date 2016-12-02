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
      let zoneCount = Object.keys(zones).length;
      let zoneKeys = Object.keys(zones);
      for (let i = 0; i < zoneKeys.length; i++) {
        let zone = zones[zoneKeys[i]];
        console.log(zone);
        let { ruleViolations } = zone;
        if (typeof ruleViolations !== 'undefined') {
          let violationsCount = Object.keys(ruleViolations).length;
          let violationKeys = Object.keys(ruleViolations);
          for (var j in ruleViolations) {
            sumPenaltys += parseInt(ruleViolations[j]["penalty"], 10);
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

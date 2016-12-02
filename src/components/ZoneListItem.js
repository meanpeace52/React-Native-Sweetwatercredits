import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ZoneListItem extends Component {
  onRowPress() {
    const { zone, projectUid } = this.props;
    Actions.zoneEdit({ zone, projectUid });
  }

  sumZoneViolations() {
    let sumPenaltys = 0;
    const { ruleViolations } = this.props.zone;
    if (typeof ruleViolations !== 'undefined') {
      const violationCount = Object.keys(ruleViolations).length;
      if (violationCount > 0) {
        for (let violation of Object.values(ruleViolations)) {
          let { penalty } = violation;
          sumPenaltys += parseInt(penalty, 10);
        }
      }
    }

    return sumPenaltys;
  }

  render() {
    const { acreage, zoneType } = this.props.zone;
    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>
            <Icon name='landscape' size={14} />
           <Text style={styles.titleStyle}>
            {acreage} Acres | {zoneType} | Credits: {this.sumZoneViolations()}
           </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 16,
    paddingLeft: 15
  }
};

export default ZoneListItem;

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ProjectListItem extends Component {
  onRowPress() {
    Actions.projectEdit({ project: this.props.project });
  }

  sumPenaltys() {
    const disturbances = _.map(this.props.project.disturbances, (val, uid) => {
        return { ...val, uid };
    });

    const disturbancesPenaltyTotal =
      disturbances.reduce((acc, disturbance) => acc + parseFloat(disturbance.debitAmount), 0);
    return disturbancesPenaltyTotal.toFixed(1);
  }


  render() {
    const { name } = this.props.project;
    const { titleStyle, creditTitleStyle, sectionStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={sectionStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Icon name='landscape' size={50} />
              <View>
                <Text style={titleStyle}> {name} </Text>
                <Text style={creditTitleStyle}> Credits: {this.sumPenaltys()}</Text>
              </View>
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 16,
    paddingLeft: 15
  },
  sectionStyle: {
    justifyContent: 'space-between',
    marginTop: 5
  }
};

export default ProjectListItem;

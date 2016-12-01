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
            {acreage} Acres | {zoneType}
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

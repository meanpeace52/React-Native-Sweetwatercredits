import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ZoneListItem extends Component {
  onRowPress() {
    const { zone } = this.props;
    Actions.zoneEdit({ zone });
  }

  render() {
    const { acreage, zoneType } = this.props.zone;
    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>
           <Text style={styles.titleStyle}>
            Acreage: {acreage}
           </Text>
           <Text style={styles.titleStyle}>
            Type: {zoneType}
           </Text>
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

export default ZoneListItem;

import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ZoneListItem extends Component {

  render() {
    const { acreage, zoneType } = this.props.zone;
    return (
      <TouchableWithoutFeedback>
        <View>
          <CardSection>
           <Text style={styles.titleStyle}>
            Acreage: {acreage}
            ZoneType: {zoneType}
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

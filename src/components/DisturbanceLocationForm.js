import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';

class DisturbanceLocationForm extends Component {
  render() {
    const { switchTitle, flexEndMarginFive } = styles;
    return (
      <View>
      <Card>
        <Text style={switchTitle}> Located in a Vulnerable Landscape? </Text>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
          <Text
            style={switchTitle}
          >
            {this.props.vulnerableLocation ? 'Yes' : 'No'}
          </Text>
          <Switch
            onValueChange={
              value => this.props.disturbanceUpdate({ prop: 'vulnerableLocation', value })
            }
            value={this.props.vulnerableLocation}
            style={flexEndMarginFive}
          />
        </View>
      </Card>
      </View>
    );
  }
 }

 const styles = {
   switchTitle: {
     fontSize: 18,
     margin: 5
   },
   flexEndMarginFive: {
     alignSelf: 'flex-end',
     margin: 5
   }
 };

 const mapStateToProps = (state) => {
   const {
     projectUid,
     acreage,
     zoneType,
     ruleViolation,
     vulnerableLocation,
     penaltyAmount } = state.disturbanceForm;

     return { projectUid, acreage, zoneType, ruleViolation, vulnerableLocation, penaltyAmount };
 };

 export default connect(mapStateToProps, { disturbanceUpdate })(DisturbanceLocationForm);

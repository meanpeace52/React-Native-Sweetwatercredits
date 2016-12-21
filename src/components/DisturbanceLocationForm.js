import React, { Component } from 'react';
import { View, Switch, Text } from 'react-native';
import { connect } from 'react-redux';
import { disturbanceUpdate } from '../actions';
import { Card } from './common';

class DisturbanceLocationForm extends Component {
  renderVunerableLocationForm() {
    const { ruleViolation, zoneType } = this.props;
    const { switchTitle, flexEndMarginFive } = styles;
    if ((ruleViolation !== 'timing' && zoneType === 'non-core') || (ruleViolation !== 'impact' && zoneType === 'core')) {
      return (
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
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.renderVunerableLocationForm()}
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

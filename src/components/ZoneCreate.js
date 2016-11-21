
import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { BlueButton, Container, Input, LogoTopLeft, Title, YellowButton } from './common';
import _ from 'lodash';
import { connect } from 'react-redux';
import { updateZone } from '../actions';

class ZoneCreate extends Component {
  render() {
    const { label } = styles;
    return (
      <View>
        <LogoTopLeft/>
        <Container>
          <Title>
            {`Calculate Credits`}
          </Title>

          <Input
            placeholder="Acreage"
            value={this.props.acreage}
            onChangeText={value => this.props.updateZone({prop: 'name', value: value })}
          />

          <Text style={label}>Zone Type</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={type => this.props.updateZone({prop: 'type', type: type})}
            style={{marginTop: 0}}>
            <Picker.Item label="Core" value="Core"/>
            <Picker.Item label="Non-Core" value="Non-Core"/>
          </Picker>
        </Container>

        <BlueButton>
          {_.toUpper('Next')}
        </BlueButton>

        <YellowButton>
          {_.toUpper('Manage Zones')}
        </YellowButton>
      </View>
    );
  }
}

const styles = {
  label: {
    fontWeight: "bold"
  }
};

const mapStateToProps= (state) => {
  const { acreage, type } = state.zonesForm;
  return { acreage, type };
};

export default connect(mapStateToProps, { updateZone })(ZoneCreate);

import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BlueButton, Container, LogoTopLeft, Title } from './common';
import ZoneForm from './ZoneForm';
import { zoneCreate } from '../actions';

class ZoneCreate extends Component {
  onButtonPress() {
    const { acreage, zoneType, projectUid } = this.props;
    this.props.zoneCreate({ acreage, zoneType, projectUid });
  }

  render() {
    return (
      <Container>
        <LogoTopLeft />
        <ZoneForm {...this.props} />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          <Icon name='landscape' size={18} /> Create Zone
        </BlueButton>
      </Container>
    );
  }
}

const mapStateToProps = ({ zoneForm }) => {
  const { acreage, zoneType } = zoneForm;
  return { acreage, zoneType };
};


export default connect(mapStateToProps, { zoneCreate })(ZoneCreate);

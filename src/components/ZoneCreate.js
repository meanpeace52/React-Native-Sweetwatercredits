import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import ZoneForm from './ZoneForm';
import { BlueButton, Container, LogoTopLeft } from './common';
import { zoneCreate } from '../actions';

class ZoneCreate extends Component {
  onButtonPress() {
    console.log(this.props);
    const { acreage, zoneType, project_uid } = this.props;
    this.props.zoneCreate({ acreage, zoneType, uid: project_uid });
  }

  render() {
    const { titleTextStyle } = styles;
    return (
      <Container>
        <LogoTopLeft />
        <Text style={titleTextStyle}>
          Calculate Credits
        </Text>

        <Text>
          For simple calculations, enter the acreage, select a zone type and click next.
          To add multiple zones, enter the same information, but click Manage Zones below.
        </Text>

        <ZoneForm {...this.props} />

        <BlueButton
          onPress={this.onButtonPress.bind(this)}
        >
          Create Zone
        </BlueButton>
      </Container>
    );
  }
}

const styles = {
  titleTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  }
};

const mapStateToProps = ({ zoneForm }) => {
  const { acreage, zoneType } = zoneForm;
  return { acreage, zoneType };
};


export default connect(mapStateToProps, { zoneCreate })(ZoneCreate);

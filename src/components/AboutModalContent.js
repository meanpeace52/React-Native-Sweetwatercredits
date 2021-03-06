import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LogoTopMiddleMedium } from './common';

class AboutModalContent extends Component {
  render() {
    const { bodyText, titleText, containerWithPadding } = styles;
    return (
      <ScrollView>
        <View style={containerWithPadding}>
          <LogoTopMiddleMedium />

          <Text style={bodyText}>
            The Sweetwater River Conservancy understands that establishing a market based valuation of habitat, and the conservation services that habitat provides, is a necessary, yet heretofore missing component of landscape conservation.   SRC believes this component of landscape conservation is necessary to ensure sustained and meaningful conservation of both habitat and species at the appropriate scale; while simultaneously balancing the demands of responsible development.
          </Text>

          <Text style={bodyText}>
            SRC actions and investments to date reflect this commitment and philosophy. The development of this nonproprietary APP, by SRC, reflects this as well.   This APP is designed to be a tool for project proponents and others, to better understand how the requirements of the Wyoming Greater Sage-grouse Core Area Strategy (WY EO 2015-04) and the Wyoming Greater Sage-grouse Compensatory Mitigation Framework interact to determine the number of Wyoming Credits needed to offset impacts that will ensure a net conservation gain for Greater sage-grouse and the Wyoming Greater Sage-grouse core areas.
          </Text>

          <Text style={titleText}>Contact Us</Text>
          <Text style={bodyText}>
            Mr. Ryan Lance{"\n"}
            Sweetwater River Conservancy{"\n"}
            P.O. Box 768{"\n"}
            Cheyenne, Wyoming 82003-0768{"\n"}
            307-459-3636{"\n"}

            rlance@sweetwaterriverconservancy.com
          </Text>

        </View>
      </ScrollView>
    );
  }
}

const styles = {
  bodyText: {
    fontSize: 18,
    paddingBottom: 15
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerWithPadding: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 15,
    marginLeft: 15
  }
};

export default AboutModalContent;

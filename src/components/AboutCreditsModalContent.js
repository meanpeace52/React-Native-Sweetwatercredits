import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LogoTopMiddleMedium } from './common';

class AboutCreditsModalContent extends Component {
  render() {
    const { bodyText, titleText, containerWithPadding } = styles;
    return (
      <ScrollView>
        <View style={containerWithPadding}>
          <LogoTopMiddleMedium />
          <Text style={titleText}>
            About Sage-Grouse Mitigation Credits
          </Text>

          <Text style={bodyText}>
            The SRC Wyoming Sage-grouse Mitigation Credit Estimator (SGMCE) estimates the number of credits needed to offset the impact of a proposed action that cannot be avoided or minimized, so that project permitting can proceed.  However, the app output is an estimate until the appropriate regulatory body (state and/or federal) has verified that input values for a project are accurate according to state and federal requirements.
          </Text>

          <Text style={bodyText}>
            SGMCE estimates the number of credits that meet the standard of the Wyoming Credit Definition in the Wyoming Greater Sage-grouse Compensatory Mitigation Framework, that are required to offset the impact of a project.   The Wyoming Credit definition sets a rigorous biological and policy-compliant standard for credits that ensures impacts to sage-grouse are offset in a manner that benefits greater sage-grouse and the Wyoming Core Area Strategy—while simultaneously providing for economic development in Wyoming.
          </Text>

          <Text style={bodyText}>
            SRC credits not only meet the highest standard of the Wyoming Credit Definition (SRC meets all mandatory requirements, has no discounted factors, and SRC credits include a landscape support additional valuation); SRC credits also include the additional benefit of being from a USFWS Approved Conservation Bank.   USFWS Approved the SRC Greater Sage-Grouse Habitat Conservation Bank in December of 2014.
          </Text>

          <Text style={bodyText}>
            It is uncertain if the USFWS will continue to approve conservation banks for Greater sage-grouse since the species was not listed in 2015.   The Wyoming Credit Definition is rigorous and appropriate for mitigating impacts, and incorporates many of the requirements of a USFWS approved Conservation Bank.  However, that notwithstanding, only SRC has USFWS approved credits.  The potential importance of such an approval as an assurance to a project proponent is noteworthy for Section 7 and other potential regulatory requirements if sage-grouse were to become a candidate or listed species in the future.   USFWS has committed to conducting another status review in 2020 to determine if greater sage-grouse warrant listing.
          </Text>
          <View
            style={{ paddingTop: 40 }}
            // TODO: hacky
          />
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

export default AboutCreditsModalContent;

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { Container, LogoTopMiddle } from './common';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Tutorial extends Component {
  renderCloseIcon() {
    const { closeIcon } = styles;
    return (
      <View>
        <TouchableOpacity
          onPress={() => Actions.pop()}
        >
          <Text
            style={closeIcon}
          >
            <Icon name="close" size={40} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { bodyText, titleText } = styles;
    return (
      <Swiper
        // style={wrapper}
        // showsButtons={true}
        activeDotColor="#FFC107"
        // nextButton={<Text style={buttonText}>›</Text>}
        // prevButton={<Text style={buttonText}>‹</Text>}
      >
        <ScrollView>
          <Container>
            <LogoTopMiddle />

            <Text style={titleText}>Wyoming Sage-Grouse Mitigation Credit Calculator</Text>
            <Text style={bodyText}>
              This app estimates the number of mitigation credits required to offset the impacts to greater sage-grouse that cannot be avoided or minimized per the requirements of the Wyoming Greater Sage-grouse Core Area Strategy rule set (WY Executive Order 2015-04).
            </Text>
            <Text style={bodyText}>
              The app is designed to be easy to use, but a working understanding of both the Wyoming Greater Sage-grouse core area strategy (Executive Order 2015-04), its avoidance and minimization rules and associated processes (e.g., Density Disturbance Calculation Tool-DDCT); and the Wyoming Greater Sage-Grouse Compensatory Mitigation Framework, is required to generate a reliable estimate of the number of mitigation credits.
            </Text>
            <View
              style={{ paddingTop: 40 }}
              // TODO: hacky
            />
          </Container>
        </ScrollView>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Signin_Register.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Projects.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Project_Create.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Disturbance.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_ZoneType.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>

        <View>
          <Image source={require('./images/Tutorial/Sweetwater_Delete_Disturbance.png')}>
            {this.renderCloseIcon()}
          </Image>
        </View>


        <ScrollView>
          <Container>
            <LogoTopMiddle />
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
          </Container>
        </ScrollView>
      </Swiper>
    );
  }
}

const styles = {
  closeIcon: {
    paddingTop: 20,
    paddingRight: 10,
    color: '#FFC107',
    textAlign: 'right'
  },
  bodyText: {
    fontSize: 18,
    paddingBottom: 15
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    textAlign: 'center'
  }
};

export default Tutorial;

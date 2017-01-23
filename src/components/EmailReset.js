import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { authFieldUpdate, updateEmail } from '../actions';
import { Container, LogoTopMiddle, BlueButton, Spinner, FlashMessages } from './common';
import EmailResetForm from './EmailResetForm';

class EmailReset extends Component {
  onButtonPress() {
    const { password, newEmail } = this.props;
    this.props.updateEmail({ password, newEmail });
  }

  render() {
    const { password, newEmail, error, notice, loading } = this.props;

    // Set button inactive status based on form inputs
    const submitFormReady = () => {
        if (password && newEmail) {
          return false;
        }
        return true;
    };

    // Render button or spinner dependent on loading flag
    const renderButton = () => {
      if (loading) {
        return <Spinner />;
      }

      return (
        <BlueButton
          onPress={this.onButtonPress.bind(this)}
          inactive={submitFormReady()}
        >
          <Icon name="person-outline" size={18} /> Reset Email
        </BlueButton>
      );
    };

    return (
      <Container>
        <LogoTopMiddle />

        <EmailResetForm {...this.props} />

        <FlashMessages error={error} notice={notice} />

        {renderButton()}

      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { password, newEmail, error, notice, loading } = auth;
  return { password, newEmail, error, notice, loading };
};

export default connect(mapStateToProps, { authFieldUpdate, updateEmail })(EmailReset)

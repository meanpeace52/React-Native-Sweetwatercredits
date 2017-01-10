import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import ProjectForm from './ProjectForm';
import { projectUpdate, projectSave, projectDelete } from '../actions';
import { Container, BlueButton, Confirm, LogoTopMiddle, YellowButton } from './common';

class ProjectEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    // feed all the project props into the ProjectFormReducer
    _.each(this.props.project, (value, prop) => {
      this.props.projectUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name } = this.props;
    const { uid, disturbances } = this.props.project;
    this.props.projectSave({ name, uid, disturbances });
  }

  onAccept() {
    const { uid } = this.props.project;
    this.props.projectDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  sumPenaltys() {
    const disturbances = _.map(this.props.project.disturbances, (val, uid) => {
        return { ...val, uid };
    });

    const disturbancesPenaltyTotal =
      disturbances.reduce((acc, disturbance) => acc + parseFloat(disturbance.penaltyAmount), 0);
    return disturbancesPenaltyTotal.toFixed(1);
  }

  render() {
    const { penaltyText } = styles;
    return (
      <Container>
        <LogoTopMiddle />

        <ProjectForm />

        <BlueButton onPress={this.onButtonPress.bind(this)}>
          <Icon name='check-circle' size={18} /> Update Project Name
        </BlueButton>

        <BlueButton
          onPress={() => Actions.disturbancesList({ project: this.props.project })}
        >
          <Icon name='nature-people' size={18} /> Disturbances
        </BlueButton>

        <YellowButton
          onPress={() => this.setState({ showModal: !this.state.showModal })}
        >
          <Icon name='delete' size={18} /> Delete Project
        </YellowButton>

        <Text style={penaltyText}> Total Credit Amount: {this.sumPenaltys()}</Text>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Container>
    );
  }
}

const styles = {
  penaltyText: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 15
  }
};

const mapStateToProps = (state) => {
  const { name } = state.projectForm;
  return { name };
};

export default connect(mapStateToProps, {
  projectUpdate,
  projectSave,
  projectDelete })(ProjectEdit);

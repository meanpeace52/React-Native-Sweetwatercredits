import React from 'react';
import {
  Actions,
  Router,
  Scene } from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import ProjectsList from './components/ProjectsList';
import ProjectCreate from './components/ProjectCreate';
import ProjectEdit from './components/ProjectEdit';
import Register from './components/Register';
import DisturbancesList from './components/DisturbancesList';
import DisturbanceShow from './components/DisturbanceShow';
import SettingsList from './components/SettingsList';
import DisturbanceZoneType from './components/DisturbanceZoneType';
import DisturbanceViolation from './components/DisturbanceViolation';
import DisturbanceAcreage from './components/DisturbanceAcreage';
import DisturbanceLocation from './components/DisturbanceLocation';
import PasswordResetRequest from './components/PasswordResetRequest';
import Tutorial from './components/Tutorial';
import PasswordReset from './components/PasswordReset';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="splash"
          component={Splash}
          hideNavBar={true}
          initial
        />

        <Scene
          key="login"
          component={Login}
          title="Login"
          hideNavBar={false}
        />

        <Scene
          key="register"
          component={Register}
          title="Register"
          hideNavBar={false}
        />

        <Scene
          key="passwordResetRequest"
          component={PasswordResetRequest}
          title="Request Password"
        />

      </Scene>

      <Scene
        key="tutorial"
      >
        <Scene
          key="tutorialShow"
          component={Tutorial}
          title="Tutorial"
          hideNavBar
        />
      </Scene>

      <Scene key="projects">
        <Scene
          key="projectsList"
          component={ProjectsList}
          title="Recent Projects"
          onRight={() => Actions.settingsList()}
          rightTitle="Settings"
          initial
        />

        <Scene
          key="projectCreate"
          component={ProjectCreate}
          title="Create a Project"
        />

        <Scene
          key="projectEdit"
          component={ProjectEdit}
          title="Edit Project"
          backTitle="Projects"
        />

        <Scene
          key="disturbancesList"
          component={DisturbancesList}
          title="Disturbances"
          onBack={() => Actions.pop({ type: 'reset' })}
          backTitle="Edit Project"
        />

        <Scene
          key="disturbanceShow"
          component={DisturbanceShow}
          title="Show Disturbance"
        />

        <Scene
          key="disturbanceZoneType"
          component={DisturbanceZoneType}
          title="Zone Type"
        />

        <Scene
          key="disturbanceViolation"
          component={DisturbanceViolation}
          title="Rule Violation"
        />

        <Scene
          key="disturbanceAcreage"
          component={DisturbanceAcreage}
          title="Disturbance Acreage"
        />

        <Scene
          key="disturbanceLocation"
          component={DisturbanceLocation}
          title="Disturbance Location"
        />

        <Scene
          key="settingsList"
          component={SettingsList}
          title="Settings"
          // leftTitle="Projects"
        />

        <Scene
          key="passwordReset"
          component={PasswordReset}
          title="Reset Password"
        />

      </Scene>
    </Router>
  );
};

export default RouterComponent;

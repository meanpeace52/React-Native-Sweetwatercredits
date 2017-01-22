import React from 'react';
import {
  Actions,
  Router,
  Scene } from 'react-native-router-flux';
import Splash from './components/Splash';
import LoginForm from './components/LoginForm';
import ProjectsList from './components/ProjectsList';
import ProjectCreate from './components/ProjectCreate';
import ProjectEdit from './components/ProjectEdit';
import RegisterForm from './components/RegisterForm';
import DisturbancesList from './components/DisturbancesList';
import DisturbanceShow from './components/DisturbanceShow';
import SettingsList from './components/SettingsList';
import DisturbanceZoneType from './components/DisturbanceZoneType';
import DisturbanceViolation from './components/DisturbanceViolation';
import DisturbanceAcreage from './components/DisturbanceAcreage';
import DisturbanceLocation from './components/DisturbanceLocation';
import PasswordResetRequest from './components/PasswordResetRequest';
import Tutorial from './components/Tutorial';

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
          key="loginForm"
          component={LoginForm}
          title="Login"
          hideNavBar={false}
        />

        <Scene
          key="registerForm"
          component={RegisterForm}
          title="Register"
          hideNavBar={false}
        />

        <Scene
          key="passwordReset"
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
      </Scene>
    </Router>
  );
};

export default RouterComponent;

import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Splash from './components/Splash';
import LoginForm from './components/LoginForm';
import ProjectsList from './components/ProjectsList';
import ProjectCreate from './components/ProjectCreate';
import ProjectEdit from './components/ProjectEdit';
import RegisterForm from './components/RegisterForm';
import DisturbancesList from './components/DisturbancesList';
import DisturbanceCreate from './components/DisturbanceCreate';
import DisturbanceZoneForm from './components/DisturbanceZoneForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="splash" component={Splash} hideNavBar={true} initial />

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

      </Scene>

      <Scene key="projects">
        <Scene
          key="projectsList"
          component={ProjectsList}
          title="Recent Projects"
          onRight={() => Actions.projectCreate()}
          rightTitle="Add"
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
        />

        <Scene
          key="disturbancesList"
          component={DisturbancesList}
          title="Disturbances"
        />

        <Scene
          key="disturbanceCreate"
          component={DisturbanceCreate}
          title="Add a Disturbance"
        />

        <Scene
          key="disturbanceZoneForm"
          component={DisturbanceZoneForm}
          title="Add Disturbance"
        />
      </Scene>

    </Router>
  );
};

export default RouterComponent;

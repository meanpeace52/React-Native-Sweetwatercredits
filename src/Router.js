import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Splash from './components/Splash';
import LoginForm from './components/LoginForm';
import ProjectsList from './components/ProjectsList';
import ProjectCreate from './components/ProjectCreate';

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

      </Scene>
    </Router>
  );
};

export default RouterComponent;

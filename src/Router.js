import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Splash from './components/Splash';
import RecentProjects from './components/RecentProjects';
import ProjectCreate from './components/ProjectCreate';
import ZoneCreate from './components/ZoneCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="splash" component={Splash} hideNavBar={true} initial/>
      </Scene>

      <Scene key="projects">
        <Scene
          key="recentProjects"
          component={RecentProjects}
          title="Recent Projects"
          onRight={() => Actions.projectCreate()}
          rightTitle="Add"
          initial/>

        <Scene
          key="projectCreate"
          component={ProjectCreate}
          title="Create a Project"/>

        <Scene
            key="zoneCreate"
            component={ZoneCreate}
            title="Create Zones"/>
      </Scene>
    </Router>
  )
};

export default RouterComponent;

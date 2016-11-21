import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Splash from './components/Splash';
import RecentProjects from './components/RecentProjects'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="splash" component={Splash} hideNavBar={true} initial/>
      </Scene>

      <Scene key="projects">
        <Scene key="recentProjects" component={RecentProjects} title="Recent Projects"/>
      </Scene>
    </Router>
  )
};

export default RouterComponent;

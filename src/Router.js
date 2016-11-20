import React from 'react';
import { Scene, Router } from 'react-native-router-flux'
// import LoginForm from './components/LoginForm'
import Splash from './components/Splash'

const RouterComponent = () => {
  <Router>
    <Scene key="splash" component={Splash} title="Splash" />
  </Router>
}

export default RouterComponent;

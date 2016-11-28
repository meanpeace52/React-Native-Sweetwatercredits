import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Lifecycle method, automatically invoked when component is rendered
    firebase.initializeApp({
      apiKey: 'AIzaSyCmfr5oHiGwYPjWOFYAQQRP9rUYeFcPnzI',
      authDomain: 'sweetwatercredits.firebaseapp.com',
      databaseURL: 'https://sweetwatercredits.firebaseio.com',
      storageBucket: 'sweetwatercredits.appspot.com',
      messagingSenderId: '133290481688'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

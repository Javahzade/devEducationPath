/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {authReducer} from './app/modules/redux';
import {name as appName} from './app.json';

const store = createStore(authReducer, applyMiddleware(logger));
const MyApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => MyApp);

import React, {Component} from 'react';
import { StyleSheet, View,AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import DrawerNavigator from './src/components/drawerNavigator';
import {name as appName} from './app.json';
import storeConfig from './src/store/storeConfig';

import Main from './Main'

const store = storeConfig();
export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
        <Main/>
    </Provider>
    )
  }
}

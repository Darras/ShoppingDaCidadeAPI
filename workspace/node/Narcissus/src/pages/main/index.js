import React, { Component } from 'react';
import { View,Text } from 'react-native';
import MapView from 'react-native-maps';

import Maps from '../../components/maps'

import Header from '../../components/header';


import styles from './styles';
const headerText = 'Home';

export default class Main extends Component {
  constructor(props){
    super(props)
  }

    render() {
      return (
        <View style={styles.container}>
          <Header headertext={headerText} navigation={this.props.navigation}/>
          <Maps></Maps>
        </View>
      );
    }
  }

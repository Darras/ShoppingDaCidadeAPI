import React, { Component } from 'react';
import { View,Text,PermissionsAndroid,TouchableHighlight,Image,AsyncStorage } from 'react-native';
import MapView,{Marker} from 'react-native-maps';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Markers extends Component {
    constructor(props){
      super(props)
    }
    state = this.props

    render(){
        
     var teste = "TESTE"
     
    return (
        <Marker coordinate= {{
            latitude: -23.5180,
            longitude: -46.7346}}>
        <View style={styles.marker}>
          <Image style={styles.img} source={{uri:"../../assets/yellow-google-map-pin-hi.png"}}></Image>
          <Text style={styles.input}>{teste}</Text>
        </View>
      </Marker>
      )
    }
}

export default Markers
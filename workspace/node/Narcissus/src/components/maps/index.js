import React, { Component } from 'react';
import { View, Text, PermissionsAndroid, TouchableHighlight, Image, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { connect } from 'react-redux'
import { logout } from '../../store/actions/user'

import { listClients } from '../../api';

import Header from '../../components/header';


import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const headerText = 'Home';

class Maps extends Component {
  constructor(props) {
    super(props)
  }
  state = this.props;


  requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
          'title': 'Location Access Required',
          'message': 'This App needs to Access your location'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        debugger
        navigator.geolocation.getCurrentPosition(
          (position) => {
            debugger
            let stateAux = this.state;
            stateAux.region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0143,
              longitudeDelta: 0.0134
            }
            this.setState(stateAux)
          },
          (error) => alert(error.message),
          { timeout: 20000, maximumAge: 1000 }
        );


      } else {
        alert("Permission Denied");
      }
    } catch (err) {
      debugger
      alert("err", err);
      console.warn(err)
    }

  }
  componentDidMount = async () => {
    await this.requestLocationPermission()
    this.showMarkers()
  }

  showMarkers = () => {
    listClients({ ...this.state }).then(data => {
      return data.clients.map(client => {
        var stateAux = this.state
        stateAux.clients.push(client)
        this.setState(stateAux)
        }
      )
    })
  }

  RetrieveUserLastLocation = async () => {
    debugger
    await AsyncStorage.getItem('@UserLastLocation').then(async value => {
      debugger
      if (value !== null) {
        let auxstate = JSON.parse(value);
        alert(auxstate)
        await this.setState(auxstate)

      } else {
        console.log('no location to retrieve');
      }
    }).done();
  }

  componentWillUnmount = () => {

    let location = this.state.region

    AsyncStorage.setItem("@UserLastLocation", JSON.stringify(location)).then(value => {
      alert(value)
    });

  }

  render() {

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          showsUserLocation
          showsMyLocationButton={true}
          onMapReady={() => this.RetrieveUserLastLocation}
          loadingEnabled>
          {
            this.state.clients.map(client => (
              <Marker coordinate={{
                latitude: client.region.latitude,
                longitude: client.region.longitude
              }}>
                <View style={styles.marker}>
                  <Image style={styles.img} source={{ uri: "../../assets/yellow-google-map-pin-hi.png" }}></Image>
                  <Text style={styles.input}>{client.contact.name}</Text>
                </View>
              </Marker>
            )
            )

          }
        </MapView>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  token: state.token,
  clients: []
})


export default connect(mapStateToProps, null)(Maps)

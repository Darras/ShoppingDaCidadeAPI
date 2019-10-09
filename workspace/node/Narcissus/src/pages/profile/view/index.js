import React, { Component } from 'react';
import {  View,TouchableOpacity,Text,TextInput,ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/user'

import styles from './styles';

class ViewProfile extends Component {
  constructor(props){
    super(props)
  }
  state = {
      onEdit: false
  }
    logout = () => {
      this.props.onLogout()
      this.props.navigation.navigate('Auth')
    }

    render() {
      return (
      <View>
        <ScrollView style={{paddingTop:20}}>
              <Text style={styles.input}>{this.props.user.contact.email}</Text>
              <Text style={styles.input}>{this.props.user.name}</Text>
              <Text style={styles.input}>{this.props.user.contact.country}</Text>
              <Text style={styles.input}>{this.props.user.contact.zipcode}</Text>
              <Text style={styles.input}>{this.props.user.contact.address}</Text>
              <Text style={styles.input}>{this.props.user.contact.phone}</Text>
        </ScrollView>
        </View>
      )
    }
}

  const mapStateToProps = state => ({
    user: state.user,
    token: state.token
})

  const mapDispatchToProps = dispatch =>{
    return {
      onLogout: () => dispatch(logout())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
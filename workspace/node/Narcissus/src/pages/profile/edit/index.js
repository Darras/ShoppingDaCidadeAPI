import React, { Component } from 'react';
import {  View,TouchableOpacity,Text,TextInput,ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { logout } from '../../../store/actions/user'

import styles from './styles';

class EditProfile extends Component {
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
        <ScrollView style={{paddingTop:20}}>
                  <TextInput style={styles.input} value={this.props.user.name} onChangeText={(name) => this.setState({...this.state.user.name = name})} placeholder='Nome' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.contact.address} onChangeText={(address) => this.setState({...this.state.user.contact.address = address})} placeholder='Endereço' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.contact.zipcode} onChangeText={(zipcode) => this.setState({...this.state.user.contact.zipcode = zipcode})} placeholder='CEP' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.contact.country} onChangeText={(country) => this.setState({...this.state.user.contact.country = country})} placeholder='País' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.contact.email} onChangeText={(email) => this.setState({...this.state.user.contact.email = email})} placeholder='E-mail' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.contact.phone} onChangeText={(phone) => this.setState({...this.state.user.contact.phone = phone})} placeholder='Telefone' placeholderTextColor='white' />
                  <TextInput style={styles.input} value={this.props.user.password} secureTextEntry={true} onChangeText={(password) => this.setState({...this.state.user.password = password})} placeholder='Senha' placeholderTextColor='white' />
                </ScrollView>  
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

  export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
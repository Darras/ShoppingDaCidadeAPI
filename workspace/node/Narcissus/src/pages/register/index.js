import React, { Component } from 'react';

import { View,TouchableOpacity,Text,TextInput,ScrollView } from 'react-native';

import { create } from '../../store/actions/user';
import { connect } from 'react-redux';
import { registerApi } from '../../api';

import styles from './styles';

class Register extends Component {
    constructor(props){
        super(props)
    }

    state = {
        user:{
            _id:'',
            password:'',
            name:'',
            contact:{
                address:'',
                zipcode: '',
                country: '',
                email: '',
                phone: ''
            }
        }

    }

     create = async () => {
        let result = await registerApi({...this.state})
            if(result.status == 200){
                var data = await result.json()
                this.setState(data)
                this.props.onCreate({...this.state})
                this.props.navigation.navigate('Home');
                
            }else{
    
            }
    }

  render() {
        return (
  
            <View style={styles.container}>
                <ScrollView style={{paddingTop:20}}>
                    <TextInput style={styles.input} value={this.state.user.name} onChangeText={(name) => this.setState({...this.state.user.name = name})} placeholder='Nome' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.contact.address} onChangeText={(address) => this.setState({...this.state.user.contact.address = address})} placeholder='Endereço' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.contact.zipcode} onChangeText={(zipcode) => this.setState({...this.state.user.contact.zipcode = zipcode})} placeholder='CEP' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.contact.country} onChangeText={(country) => this.setState({...this.state.user.contact.country = country})} placeholder='País' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.contact.email} onChangeText={(email) => this.setState({...this.state.user.contact.email = email})} placeholder='E-mail' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.contact.phone} onChangeText={(phone) => this.setState({...this.state.user.contact.phone = phone})} placeholder='Telefone' placeholderTextColor='white' />
                    <TextInput style={styles.input} value={this.state.user.password} secureTextEntry={true} onChangeText={(password) => this.setState({...this.state.user.password = password})} placeholder='Senha' placeholderTextColor='white' />
                    <TouchableOpacity style={styles.buttom} onPress={()=>{ this.create() }}>
                            <Text style={styles.buttomText}>Criar</Text>
                    </TouchableOpacity>       
                </ScrollView>
                
            </View>
            );
  }
}


const mapDispatchToProps = dispatch => {
    return{
        onCreate: user => dispatch(create(user))
    }
}
 export default connect(null,mapDispatchToProps)(Register);

import React, { Component } from 'react';

import {AsyncStorage, View,TouchableOpacity,Text,TextInput,Image } from 'react-native';

import { login } from '../../store/actions/user';
import { connect } from 'react-redux';

import { loginApi } from '../../api';

import styles from './styles';

class Login extends Component {
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
        },
        errorMessage:''
    }

      _storeData = async (state) => {
        try {
            debugger
            await AsyncStorage.setItem("@LoggedUser",JSON.stringify(state)).then(value =>{
                debugger
                alert(value)
            });
        } catch (error) {
            alert(error)
        }
      };

    login = async () => {
        let func = await loginApi({...this.state})
        if(func.ok){
            var data = await func.json()
            
                this.setState(data.user)
                this.props.onLogin(this.state)
                await this._storeData(this.state)
                .then((valuue)=>{
                    debugger
                    this.props.navigation.navigate('Home')            
                })           
        }
        else{
            var prop = {...this.state}
            prop.errorMessage = "Usuário não encontrado";
            this.setState(prop)
        }
    }

    register = () => {
        this.props.navigation.navigate('Register')
    }

    async componentDidMount(){

        await AsyncStorage.getItem('@LoggedUser').then(async value => {
            if (value !== null) {
                let auxstate = JSON.parse(value);
                await this.setState(auxstate,()=>{
                    
                    this.props.onLogin(this.state)
                    this.props.navigation.navigate("Home")
                })
                
              }else{
                alert('failed to retrieve');
              }
        }).done();          
    }

  render() {
      let message;
    if(this.state.errorMessage != ""){
        message = <Text style={styles.input} >Usuário não encontrado</Text>
    }

    return (
        
        <View style={styles.container}>
        <Image style={styles.img} source={require('../../../android/app/src/main/res/drawable/icon.png')} />
        {message}
        <TextInput style={styles.input} value={this.state.user.contact.email} onChangeText={(email) => { var prop = {...this.state}; prop.user.contact.email = email; this.setState(prop)}} placeholder='Email' placeholderTextColor='white' />
        <TextInput style={styles.input} secureTextEntry={true} value={this.state.user.password} onChangeText={(password) => { var prop = {...this.state}; prop.user.password = password; this.setState(prop)}} placeholder='Senha' placeholderTextColor='white' />
            <TouchableOpacity style={styles.buttom} onPress={() => {this.login()}}>
                <Text style={styles.buttomText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttom} onPress={()=>{this.register()}}>
                <Text style={styles.buttomText}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
        );
  }
}


const mapDispatchToProps = dispatch => {
    return{
        onLogin: user => dispatch(login(user))
    }
}
 export default connect(null,mapDispatchToProps)(Login);

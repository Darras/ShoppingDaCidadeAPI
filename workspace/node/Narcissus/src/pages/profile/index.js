import React, { Component } from 'react';
import {  View,TouchableOpacity,Text,TextInput,ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { logout } from '../../store/actions/user'
import EditProfile from './edit/index';
import ViewProfile from './view/index';
import Header from '../../components/header';

import styles from './styles';
const headertext = 'Profile';

class Profile extends Component {
  constructor(props){
    super(props)
  }
  state = {
    onEdit: false,
    buttomText:"Editar"
}
estado = null

    logout = () => {
      this.props.onLogout()
      this.props.navigation.navigate('Auth')
    }
    renderForm = () => {
      if(!this.state.onEdit){
        this.setState({onEdit:false})
        return <ViewProfile />
        
      }else{
          this.setState({onEdit:true})
          return <EditProfile />
          
    }
  }
  componentDidMount(){
      this.estado = this.renderForm()
  }
  componentWillUpdate(prevProps,prevState){
    if(this.state.onEdit != prevState.onEdit)
    if(!this.state.onEdit)
      this.setState({buttomText:"Editar"})
    else
    this.setState({buttomText:"Salvar"})
  }

    render() {
          return (
              <View style={styles.container}>
                <Header headertext={headertext} navigation={this.props.navigation}/>
                {this.estado}
                <TouchableOpacity style={styles.buttom}  onPress={() => {this.setState({onEdit:!this.state.onEdit})}}>
                  <Text style={styles.buttomText}>{this.state.buttomText}</Text>
                </TouchableOpacity>
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

  export default connect(mapStateToProps, mapDispatchToProps)(Profile)
import React,{Component} from 'react';
import { connect } from 'react-redux';

import { 
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    Image,
    AsyncStorage
} from 'react-native';
import styles from './styles';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class DrawerMenu extends Component{

    constructor(props){
        super(props)
    }

    navLink(nav,text){
        return(
            <TouchableOpacity style={{height:50}} onPress={() => {this.props.navigation.navigate(nav)}}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topLinks}>
                    <View style={styles.profile}>
                            <View style={styles.imgView}>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Image style={styles.img} source={require('../../assets/profile.jpg')} />
                                </TouchableOpacity>
                            </View>
                        <View>
                            <Text style={{color:'white',fontSize:18}}>{this.props.user.contact.email}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomLinks}>
                    {this.navLink('Home','Home')}
                    {this.navLink('Profile','Profile')}
                    {this.navLink('Social','Social')}
                    {this.navLink('Suporte','Suporte')}
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

 export default connect(mapStateToProps)(DrawerMenu);
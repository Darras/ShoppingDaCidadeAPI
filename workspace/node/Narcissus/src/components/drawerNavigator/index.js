import React from 'react';

import { Dimensions } from 'react-native';
import { createDrawerNavigator,createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '../../pages/main'
import Profile from '../../pages/profile';
import DrawerMenu from '../drawerMenu';
import Login from '../../pages/login';
import Register from '../../pages/register';


const width = Dimensions.get('window').width;
const drawerConfig = {
     drawerWidth : width*0.83,
     contentComponent:({navigation}) => {
         return(<DrawerMenu navigation={navigation} />)
     }
}
// import { Container } from './styles';
const drawerNavigator = createDrawerNavigator({
    Home:{
        screen: Main
    },
    Profile:{
        screen: Profile
    }
},drawerConfig);

const authNavigator = createSwitchNavigator({
    Auth:{
        screen:Login
    },
    Redirect:{
        screen:drawerNavigator
    },
    Register:{
        screen:Register
    }
},{
    initialRouteName:"Auth"
})

// const stackNavigator = createStackNavigator({
//     Login:{
//         screen:authNavigator
//     }
// });



//export const appSwitchContainer = createAppContainer(switchNavigator);
export default createAppContainer(authNavigator);
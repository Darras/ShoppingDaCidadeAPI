import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor:'black'
    },
    input:{
        borderBottomWidth:1,
        borderColor:'#f2e916',
        height:50,
        width:300,
        fontSize:24,
        color:'white',
        backgroundColor:'transparent',
        margin:10
    },
    buttom:{
        borderWidth:1,
        borderRadius:24,
        borderColor:'#f2e916',
        margin:20,
        padding:5,
        alignItems:'center',
    },
    buttomText:{
        fontSize:28,
        color:'white',
    },  
});

export default styles;
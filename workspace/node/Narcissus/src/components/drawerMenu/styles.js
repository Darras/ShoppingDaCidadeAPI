import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray'
    },
    profile:{
        flex:2,
        flexDirection:'column',
        alignItems:'center',
        paddingTop:25,
        
    },
    imgView:{
        flex:2,
        flexDirection:'column',
        justifyContent:'center'
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
        borderWidth:1,
        borderColor:'white'
    },
    topLinks:{
        height:170,
        backgroundColor:'black',
        borderBottomWidth:1,
        borderColor:"#f2e916",
        paddingBottom:10,
    },
    bottomLinks:{
        flex:1,
        backgroundColor:'black',
        paddingTop:10,
        paddingBottom:450
    },
    link:{
        flex:1,
        fontSize:20,
        padding:6,
        paddingLeft:14,
        margin:5,
        textAlign:'left',
        color:'#f2e916'
    }
});

export default styles;
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
      },
      container:{
          flex:1,
          alignSelf: 'stretch',
      },
      myLocationButton: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        padding: 15,
        justifyContent: 'center',
        borderRadius: 50
      },
      marker:{
        backgroundColor:"#550bbc",
        padding:8,
        borderRadius:50
      },
      img:{
        padding:8,
        width: '100%',
        height: '100%',
      },
      input:{
        fontSize:20,
        color:'white',
    }
});

export default styles;
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        padding: 10,
        borderBottomWidth: 1,
        marginVertical: 15,
        backgroundColor: "#dbfcff",
        width:300,
        borderRadius:15,
        fontSize: 18,
        alignSelf: 'center'
    },
    btacao:{
        backgroundColor:'#4ab3ff',
        alignItems:'center',
        padding: 15,
        borderRadius: 15,
        width:100,
        alignSelf:'center'
    },
    title:{
        fontSize: 24,
        color: 'blue',
        marginBottom: 30
    },
    resultado:{
        marginTop: 30,
        fontSize: 16
    },
    itemMenu:{
        backgroundColor:'#4ab3ff',
        alignItems:'center',
        padding: 15,
        borderRadius: 15,
        width:150,
        marginVertical: 20,
        alignSelf: 'center'
    }
  });

  export default styles
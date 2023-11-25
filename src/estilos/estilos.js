import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerCard:{
        width: 200,
        margin: 15,
        borderWidth: 1,
        borderColor: 'red',
        padding: 15,
        backgroundColor:'#e5e5e5',
        borderRadius: 10
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
    btedita:{
        backgroundColor:'#4ab3ff',
        alignItems:'center',
        padding: 10,
        borderRadius: 15,        
    },
    btexclui:{
        backgroundColor:'#f06e75',
        alignItems:'center',
        padding: 10,
        borderRadius: 15,       
    },
    botoes:{
       display:'flex',
       flexDirection:'row',
       justifyContent: 'space-between',
       marginTop: 15     
    },
    title:{
        fontSize: 24,
        color: 'blue',
        marginBottom: 30
    },
    subtitle:{
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center'
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
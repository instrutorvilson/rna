import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../estilos/estilos";

export default function Home({ navigation }) {
  const [logado, setLogado] = useState(null)
  
  function handleLogout(){
    let token = localStorage.getItem('token')
    if(token != null){
      localStorage.removeItem('token')
      setLogado(null)
      navigation.navigate('Home')
    }
  }

  useEffect(()=>{
     setLogado(localStorage.getItem('token'))
  },[])

  return (
    <View>
      <View>
        {
           logado &&
            <TouchableOpacity
              style={styles.btlogout}
              onPress={handleLogout}
            >
               <Text>Logout</Text>
            </TouchableOpacity>          
        }
        
      </View>

      <Text style={styles.subtitle}>Agenda</Text>
      <TouchableOpacity
        style={[styles.btacao, { marginVertical: 15 }]}
        onPress={() => navigation.navigate('Consulta')}
      >
        <Text>Consulta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btacao}
        onPress={() => navigation.navigate('Cadastro')}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
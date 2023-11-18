import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ComparaNumeros from './src/componentes/comparaNumeros';
import Endereco from './src/componentes/endereco';
import VerIdade from './src/componentes/verIdade';
import styles from './src/estilos/estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu progama</Text>
      
     { 
       /*<VerIdade /> 
         <ComparaNumeros 
         />*/
         <Endereco />
      }   
      <StatusBar style="auto" />
    </View>
  );
}



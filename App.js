import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import VerIdade from './src/componentes/verIdade';
import styles from './src/estilos/estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu progama</Text>
      
      <VerIdade />
         
      <StatusBar style="auto" />
    </View>
  );
}



import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';

export default function CadContato() {
  return (
    <View>
      <Text style={styles.subtitle}>Cadastrar Contato</Text>
      <TextInput 
         style={styles.input}
         placeholder="Informe o nome"
      />

      <TextInput 
         style={styles.input}
         placeholder="Informe o email"
      />

      <TextInput 
         style={styles.input}
         placeholder="Informe o telefone"
      />

      <TouchableOpacity
        style={styles.btacao}
      >
        <Text>Gravar</Text>
      </TouchableOpacity>
    </View>
  );
}
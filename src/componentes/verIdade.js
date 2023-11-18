import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';

export default function VerIdade() {
  return (
    <View>      
      <TextInput 
         style={styles.input}
         placeholder='Informe seu nome'          
      />

      <TextInput 
         style={styles.input}
         placeholder='Informe seu idade'          
      />

      <TouchableOpacity
          style={styles.btacao}
          onPress={()=>alert('')}
      >
          <Text>Verificar</Text>
      </TouchableOpacity>  
      <View>
           <Text style={styles.resultado}>Vc é: </Text>
      </View>       
      
    </View>
  );
}



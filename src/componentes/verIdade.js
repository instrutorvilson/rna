import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';

export default function VerIdade() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [resultado, setResultado] = useState()

  function handleVerificar(){
    if(idade < 18){
        setResultado('menor')
    }
    else{
        setResultado('maior')
    }
  }

  return (
    <View>      
      <TextInput 
         style={styles.input}
         placeholder='Informe seu nome' 
         value={nome} 
         onChangeText={(text)=>setNome(text)}       
      />

      <TextInput 
         style={styles.input}
         placeholder='Informe seu idade'
         value={idade}
         onChangeText={(text)=>setIdade(text)}          
      />

      <TouchableOpacity
          style={styles.btacao}
          onPress={handleVerificar}
      >
          <Text>Verificar</Text>
      </TouchableOpacity>  
      <View>
           <Text style={styles.resultado}>{nome} vc é {resultado} de idade.</Text>
      </View>       
      
    </View>
  );
}



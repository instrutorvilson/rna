import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';

export default function ComparaNumeros() {
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [resultado, setResultado] = useState()

  function handleVerificar(){
    if(n1 < n2){
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
         placeholder='Informe numero 1' 
         value={n1} 
         onChangeText={(text)=>setN1(text)} 
         keyboardType="numeric"      
      />

      <TextInput 
         style={styles.input}
         placeholder='Informe numero 2'
         value={n2}
         onChangeText={(text)=>setN2(text)} 
         keyboardType="numeric"         
      />

      <TouchableOpacity
          style={styles.btacao}
          onPress={handleVerificar}
      >
          <Text>Verificar</Text>
      </TouchableOpacity>  
      <View>
         {resultado && <Text style={styles.resultado}>{n1} é {resultado} que {n2}.</Text>}
      </View>       
      
    </View>
  );
}



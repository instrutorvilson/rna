import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';
import Toast from 'react-native-toast-message';

export default function VerIdade() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [resultado, setResultado] = useState()

  function handleVerificar(){
    setResultado('')
    if(nome == ''){
      Toast.show({
        type: 'info',
        text1: 'Atenção',
        text2: 'O nome deve ser informado!'
      });
      return
    }

    if(idade == ''){
      Toast.show({
        type: 'info',
        text1: 'Atenção',
        text2: 'A idade deve ser informado!'
      });
      return
    }
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
         onChange={()=>setResultado('')}      
      />

      <TextInput 
         style={styles.input}
         placeholder='Informe seu idade'
         value={idade}
         onChangeText={(text)=>setIdade(text)} 
         keyboardType="numeric" 
         onChange={()=>setResultado('')}        
      />

      <TouchableOpacity
          style={styles.btacao}
          onPress={handleVerificar}
      >
          <Text>Verificar</Text>
      </TouchableOpacity>  
      <View>
         {resultado && <Text style={styles.resultado}>{nome} vc é {resultado} de idade.</Text>}
      </View>       
      
    </View>
  );
}



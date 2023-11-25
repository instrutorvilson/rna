import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';
import Toast from 'react-native-toast-message';
import { useState } from 'react';

export default function CadContato() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[fone, setFone] = useState('')

  function handleGravar(){
     if(nome == ''){
        Toast.show({
          type: 'error',
          text1: 'Atenção!',
          text2: 'O nome deve ser informado'
        });
        return
     }

    if(email == ''){
      Toast.show({
        type: 'error',
        text1: 'Atenção!',
        text2: 'O email deve ser informado'
      });
      return
    }
    if(fone == ''){
      Toast.show({
        type: 'error',
        text1: 'Atenção!',
        text2: 'O fone deve ser informado'
      });
      return
   }

   /**codigo firebase */
   Toast.show({
    type: 'success',
    text1: 'Atenção!',
    text2: 'Contato salvo com sucesso'
  });

  }
  return (
    <View>
      <Text style={styles.subtitle}>Cadastrar Contato</Text>
      <TextInput 
         value={nome}
         onChangeText={(text)=>setNome(text)}
         style={styles.input}
         placeholder="Informe o nome"
      />
      
      <TextInput 
         value={email}
         onChangeText={(text)=>setEmail(text)}
         style={styles.input}
         placeholder="Informe o email"
      />

      <TextInput 
         value={fone}
         onChangeText={(text)=>setFone(text)}
         style={styles.input}
         placeholder="Informe o telefone"
      />

      <TouchableOpacity
        style={styles.btacao}
        onPress={handleGravar}
      >
        <Text>Gravar</Text>
      </TouchableOpacity>
    </View>
  );
}
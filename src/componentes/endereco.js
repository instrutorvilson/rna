import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from '../estilos/estilos';

export default function Endereco() {
  const [cep, setCep] = useState('89046574')
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [uf, setUf] = useState('')

 async function handlePreencherEndereco(){
    if(cep != ''){
      var data = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      data = await data.json()
      setLogradouro(data.logradouro)
      setBairro(data.bairro)
      setCidade(data.localidade)
      setUf(data.uf)

    }else{
       alert('Informe o cep')
    }
    
  }

  return (
    <View>      
      <TextInput 
         style={styles.input}
         placeholder='Informe cep' 
         value={cep} 
         onChangeText={(text)=>setCep(text)} 
         keyboardType="numeric"
         onBlur={handlePreencherEndereco} 
             
      /> 
      <TextInput 
         style={styles.input}
         placeholder='Informe logradouro' 
         value={logradouro} 
         onChangeText={(text)=>setLogradouro(text)}             
      /> 
      <TextInput 
         style={styles.input}
         placeholder='Informe bairro' 
         value={bairro} 
         onChangeText={(text)=>setBairro(text)}             
      />
      <TextInput 
         style={styles.input}
         placeholder='Informe cidade' 
         value={cidade} 
         onChangeText={(text)=>setCidade(text)}             
      />
      <TextInput 
         style={styles.input}
         placeholder='Informe UF' 
         value={uf} 
         onChangeText={(text)=>setUf(text)}             
      />
            
      
    </View>
  );
}



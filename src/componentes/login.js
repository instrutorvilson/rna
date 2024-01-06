import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Pressable } from "react-native"
import styles from "../estilos/estilos"
import Toast from 'react-native-toast-message';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../configuracao/firebaseConfig'

export default function Login({navigation}) {
    const [email, setEmail] = useState('maria@gmail.com')
    const [senha, setSenha] = useState('123456')

    async function handleLogin() {        
        if(email == ''){
            Toast.show({
              type: 'error',
              text1: 'Atenção!',
              text2: 'Informe o email'
            });
            return
         }
    
        if(senha == ''){
          Toast.show({
            type: 'error',
            text1: 'Atenção!',
            text2: 'Informe a senha'
          });
          return
        }
        /**acessar firebase e armazenar token no staorage */
       try{
          const auth = getAuth(app)
          var user = await signInWithEmailAndPassword(auth, email, senha)
          var token = await user.user.getIdToken()
          localStorage.setItem('token',token)
          //navega para home
          navigation.navigate('Home')
       }
       catch(error){
          if (error){
            Toast.show({
                type: 'error',
                text1: 'Atenção!',
                text2: 'Usuário ou senha inválidos!'
              })
          }
       }
        
    }

    return (
        <View >
            <Text style={styles.subtitle}>Login</Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="Informe o email"
            />

            <TextInput
                value={senha}
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
                placeholder="Informe a senha"
            />

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity
                    style={styles.btacao}
                    onPress={handleLogin}
                >
                    <Text>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btacao}
                    onPress={()=> navigation.navigate('CadUser')}
                >
                    <Text>cadastrar</Text>
                </TouchableOpacity>
                
            </View>

        </View>
    )
}
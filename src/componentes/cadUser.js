import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "../estilos/estilos"
import Toast from 'react-native-toast-message';
import app from '../configuracao/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CadUser({ navigation }) {
    const [email, setEmail] = useState('maria@gmail.com')
    const [senha, setSenha] = useState('123456')

    function handleGravar() {
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
        const auth = getAuth(app)
        createUserWithEmailAndPassword(auth, email, senha)
            .then((credential) => {
                console.log(credential.user)
                Toast.show({
                    type: 'info',
                    text1: 'Atenção!',
                    text2: 'Usuário criado com sucesso'
                  });
            })
            .catch((error) => console.log(error))
    }

    return (
        <View>
            <Text style={styles.subtitle}>Novo Usuário</Text>
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

            <View>
                <TouchableOpacity
                    style={styles.btacao}
                    onPress={handleGravar}
                >
                    <Text>Gravar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
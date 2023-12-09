import { useState } from "react";
import { View, TextInput, Alert, Button } from "react-native";

export default function Cadastro() {
    const[nome, setNome] = useState('jeferson')
    return (
        <View>
            <TextInput
                testID="input-name"
                placeholder="Nome"
                autoCorrect={false}
                value={nome}
                onChangeText={txt => setNome(txt)}
            />
            <Button
               title="Gravar"
               testID="bt-gravar"
               onPress={()=> Alert.alert("opa")}
            />
        </View>
    )
}
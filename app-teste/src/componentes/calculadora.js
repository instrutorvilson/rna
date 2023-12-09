import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

export default function Calculadora() {
    const[n1, setN1] = useState()
    const[n2, setN2] = useState()
    const[resultado, setResultado] = useState()
    return (
        <View>
            <TextInput
                placeholder="N1"
                value={n1}
                onChangeText={txt => setN1(txt)}
            />
            <TextInput
                placeholder="N2"
                value={n2}
                onChangeText={txt => setN2(txt)}
            />
            <Button
               title="Calcular"
               testID="bt-calcular"
               onPress={()=> setResultado(n1+n2)}
            />
            <Text>{resultado}</Text>
        </View>
    )
}
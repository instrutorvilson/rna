import { View, Text, TouchableOpacity } from "react-native";
import styles from "../estilos/estilos";

export default function Home({ navigation }) {
  return (
    <View>
        <Text style={styles.subtitle}>Agenda</Text>
        <TouchableOpacity
           style={[styles.btacao,{marginVertical: 15}]}
           onPress={()=>navigation.navigate('Consulta')}
        >
          <Text>Consulta</Text>
        </TouchableOpacity>

      <TouchableOpacity
        style={styles.btacao}
        onPress={()=>navigation.navigate('Cadastro')}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
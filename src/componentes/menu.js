import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../estilos/estilos';

export default function Menu({ navigation }) {
  return (
    <View>
      <TouchableOpacity
          style={styles.itemMenu}
          onPress={()=> navigation.navigate('Idades')}
      >
          <Text>Ver idade</Text>
      </TouchableOpacity> 

      <TouchableOpacity
          style={styles.itemMenu}
          onPress={()=> navigation.navigate('VerificaNumeros')}
      >
          <Text>Comparar numeros</Text>
      </TouchableOpacity>  

      <TouchableOpacity
          style={styles.itemMenu}
          onPress={()=> navigation.navigate('Endereco')}
      >
          <Text>Verificar endereços</Text>
      </TouchableOpacity>           
      
    </View>
  );
}



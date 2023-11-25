import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';

import styles from './src/estilos/estilos';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/componentes/home';
import CadContato from './src/componentes/cadContato';
import ConsultaContatos from './src/componentes/consultaContatos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Consulta" component={ConsultaContatos} />
          <Stack.Screen name="Cadastro" component={CadContato} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}



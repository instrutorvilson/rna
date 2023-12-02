import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { View } from 'react-native';

import styles from './src/estilos/estilos';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/componentes/home';
import CadContato from './src/componentes/cadContato';
import ConsultaContatos from './src/componentes/consultaContatos';
import Login from './src/componentes/login';
import CadUser from './src/componentes/cadUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Consulta" component={ConsultaContatos} />
          <Stack.Screen name="Cadastro" component={CadContato} />
          <Stack.Screen name="CadUser" component={CadUser} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}



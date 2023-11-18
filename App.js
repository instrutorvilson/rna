import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

import ComparaNumeros from './src/componentes/comparaNumeros';
import Endereco from './src/componentes/endereco';
import VerIdade from './src/componentes/verIdade';
import Menu from './src/componentes/menu';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Menu' component={Menu}/>
          <Stack.Screen name='Idades' component={VerIdade}/>
          <Stack.Screen name='VerificaNumeros' component={ComparaNumeros}/>
          <Stack.Screen name='Endereco' component={Endereco}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
      <Toast />
    </NavigationContainer>
  );
}



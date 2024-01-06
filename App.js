import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';

import Cadastro from './src/componentes/cadastro';
import Consulta from './src/componentes/consulta';
import Home from './src/componentes/home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
     <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="Home" component={Home}/>
              <Drawer.Screen name="Cadastro" component={Cadastro}/>
              <Drawer.Screen name="Consulta" component={Consulta}/>
          </Drawer.Navigator>
       </NavigationContainer>      
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

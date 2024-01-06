import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
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
              <Drawer.Screen 
                 name="Home" 
                 component={Home}
                 options={{ drawerIcon:({color, size}) => <Icon name='home' size={size} color={color}/> }}
              />
              <Drawer.Screen 
                  name="Cadastro" 
                  component={Cadastro}
                  options={{ drawerIcon:({color, size}) => <Icon name='plus' size={size} color={color}/> }}
                />
              <Drawer.Screen 
                  name="Consulta" 
                  component={Consulta}
                  options={{ drawerIcon:({color, size}) => <Icon name='search' size={size} color={color}/> }}
              />
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

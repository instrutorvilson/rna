
import { FlatList, Text, View } from 'react-native';
import styles from '../estilos/estilos';
import CardContato from './cardContato';

export default function ConsultaContatos() {
  const contatos = [
    {id:1, nome:'Maria', email:'maria@gmail.com', fone:'(47)9087-0987'},
    {id:2, nome:'João', email:'joao@gmail.com', fone:'(47)5698-0987'},
    {id:3, nome:'Pedro', email:'pedro@gmail.com', fone:'(47)5698-0987'}
]
  return (
    <View style={styles.container}>
      <FlatList 
         data={contatos}
         renderItem={({item}) => <CardContato
            contato={item}
         />}
      />    
      

    </View>
  );
}
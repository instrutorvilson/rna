import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from '../estilos/estilos';

export default function CardContato(props) {
  return (
    <View style={styles.containerCard}>
       <Text>{props.contato.nome}</Text>
       <Text>{props.contato.email}</Text>
       <Text>{props.contato.fone}</Text>
       <View style={styles.botoes}>
           <TouchableOpacity
             style={styles.btedita}
           >
              <Text>Editar</Text>
           </TouchableOpacity>

           <TouchableOpacity
              style={styles.btexclui}
           >
              <Text>Excluir</Text>
           </TouchableOpacity>
       </View>
    </View>
  );
}
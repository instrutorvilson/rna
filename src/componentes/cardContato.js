import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import styles from '../estilos/estilos';
import app from '../configuracao/firebaseConfig'

import { doc, deleteDoc, getFirestore, updateDoc, deleteField }
   from "firebase/firestore"

export default function CardContato({ contato, navigation }) {
   async function handleExcluir() {
      const db = getFirestore(app)
      /**exclui todo o documento */
      //await deleteDoc(doc(db, "contatos", contato.id));
      
      /**exclui um campo do documento */
      var refDoc = doc(db, "contatos", contato.id)
      await updateDoc(refDoc,{
         fone:deleteField()
         
      })
      navigation.navigate("Home")
   }

   return (
      <View style={styles.containerCard}>
         <Text>{contato.nome}</Text>
         <Text>{contato.email}</Text>
         <Text>{contato.fone}</Text>
         <Text>{contato.id}</Text>
         <View style={styles.botoes}>
            <TouchableOpacity
               style={styles.btedita}
            >
               <Text>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.btexclui}
               onPress={handleExcluir}
            >
               <Text>Excluir</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
}
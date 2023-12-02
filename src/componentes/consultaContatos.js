
import { useEffect, useState } from 'react';
import { FlatList,  View } from 'react-native';
import styles from '../estilos/estilos';
import CardContato from './cardContato';
import app from '../configuracao/firebaseConfig'
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function ConsultaContatos({navigation}) {
  /*const contatos = [
    {id:1, nome:'Maria', email:'maria@gmail.com', fone:'(47)9087-0987'},
    {id:2, nome:'João', email:'joao@gmail.com', fone:'(47)5698-0987'},
    {id:3, nome:'Pedro', email:'pedro@gmail.com', fone:'(47)5698-0987'}
   ]*/
  const[contatos, setContatos] = useState([])

  const db = getFirestore(app)
  
  async function loadFirebase(){
      let query = await getDocs(collection(db,"contatos"))
      query.forEach((doc) => setContatos((ant)=>[...ant,doc.data()]))
  }

  useEffect(()=>{
      if(localStorage.getItem('token') != null){
          loadFirebase()
      }else{
         navigation.navigate('Login')
      }
     
  },[])

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
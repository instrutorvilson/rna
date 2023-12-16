import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Modal,
  View,
  Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

export default function App() {
  const camRef = useRef(null);
  const [tipo, setTipo] = useState(CameraType.front);
  const [permissao, setPermissao] = useState();
  const [foto, setFoto] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissao(status === 'granted');
    })();
  }, []);

  if (permissao === false) {
    return <Text>Vc precisa de permissão</Text>;
  }

  async function tirarFoto() {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setFoto(data.uri);
      setOpen(true);
    }
  }

  async function salvarFoto() {
    await MediaLibrary.createAssetAsync(foto)
    setOpen(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Camera style={styles.camera} type={tipo} ref={camRef}>
        <TouchableOpacity
          onPress={() => {
            setTipo(
              tipo === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
          style={styles.flip}>
          <Text>Trocar camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.change} onPress={tirarFoto}>
          <Text>Tirar foto</Text>
        </TouchableOpacity>
        <Text style={{ color: 'white', marginStart: 30 }}>Status:{foto}</Text>
      </Camera>
      {foto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View style={{ margin: 30 }}>
            <View style={{ margin: 10, flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ margin: 10, backgroundColor: 'red' }}
                onPress={() => setOpen(false)}>
                <FontAwesome
                  name="window-close"
                  size={50}
                  color="#fff"></FontAwesome>
              </TouchableOpacity>

              <TouchableOpacity style={{ margin: 10 }} onPress={salvarFoto}>
                <FontAwesome
                  name="upload"
                  size={50}
                  color="#121212"></FontAwesome>
              </TouchableOpacity>
            </View>
            <Image style={styles.image} source={{ uri: foto }} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  flip: {
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  change: {
    padding: 10,
    backgroundColor: 'red',
    width: 150,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
});

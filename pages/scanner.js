import React, {useState, useEffect} from 'react'
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import {Icon, Button} from 'react-native-elements'

const Scanner = () => {
  const [cameraVisible, setCameraVisible] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [code, setCode] = useState(null)
  const [hasPermission, setHasPermission] = useState(null);
  const handleBarCodeScanned = ({data}) => {
    setScanned(true)
    setCode(data)
    console.log(code)
  }

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{display: 'flex', alignSelf: 'center'}}>
      <View>
        <Text style={styles.text} >En utilisant l'appareil photo de votre téléphone, placer le QR code dans le cadre ci-dessous</Text>
      </View>
      <View style={styles.scanner}>
        <BarCodeScanner
          style={{display: 'flex', alignSelf: 'center', width: 200, height: 200}}
          onBarCodeScanned={handleBarCodeScanned}
        />

      </View>
      <View>
        {code && <Text style={styles.text}>Vous avez scanné le code: {code}</Text>}
        {scanned && <Button buttonStyle={{ margin: 10, borderRadius: 10, padding: 10 }} color="#ff5c5c" type='outline' title={'Scanner un autre code'} onPress={() => setScanned(false)} />}
      </View>
      <View style={{display: 'flex', alignSelf: 'center'}}>
        <TouchableOpacity style={styles.myButton} onPress={() => alert(code)} >
          <View style={styles.textButton}>
            <Icon type='feather' name='camera' color='white' size={50} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{display: 'flex', alignSelf: 'center'}}>retour au choix du code</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  scanner: {
    margin: 20,
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#436d8b',
    padding: 5
  },
  myButton: {
    width: 100,
    height: 100,
    padding: 2.5,
    backgroundColor: 'white',
    borderRadius: 180,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 20
  },
  textButton: {
    justifyContent: 'center',
    width: 91,
    height: 91,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 180,
    backgroundColor: '#436d8c',
    paddingBottom: 4
  },
  text: {
    color: '#436d8c',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
});

export default Scanner

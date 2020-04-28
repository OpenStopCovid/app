import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import {Icon, Button} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import HomeButton from '../components/home-button'

const Scanner = ({navigation}) => {
  const [scanned, setScanned] = useState(false)
  const [code, setCode] = useState(null)
  const [hasPermission, setHasPermission] = useState(null);
  const handleBarCodeScanned = ({data}) => {
    setScanned(true)
    setCode(data)
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
    <View style={styles.centeredView}>
      <View>
        <Text style={styles.text} >En utilisant l'appareil photo de votre téléphone, placer le QR code dans le cadre ci-dessous</Text>
      </View>
      <View style={styles.scanner}>
        <BarCodeScanner
          style={{display: 'flex', alignSelf: 'center', width: 200, height: 200, borderRadius: 5, overflow: 'hidden'}}
          onBarCodeScanned={handleBarCodeScanned}
        />

      </View>
      <View>
        {scanned && <Button buttonStyle={{margin: 5, borderRadius: 10, padding: 5}} type='outline' title={'Scanner un autre code'} onPress={() => setScanned(false)} />}
        {code && <Text style={styles.text}>Votre code: {code}</Text>}
      </View>
      <View style={{display: 'flex', alignSelf: 'center'}}>
        <TouchableOpacity style={styles.myButton} onPress={() => navigation.navigate('Validation')} >
          <View style={styles.textButton}>
            <Icon type='feather' name='camera' color='white' size={50} />
          </View>
        </TouchableOpacity>
      </View>
      <HomeButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  scanner: {
    margin: 15,
    display: 'flex',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#436d8b',
    borderRadius: 10,
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
    fontSize: 18,
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

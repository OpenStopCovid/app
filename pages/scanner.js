import React, {useState, useCallback} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {RNCamera} from 'react-native-camera'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

import {sendIAmInfected} from 'react-native-dp3t-sdk'

import HomeButton from '../components/home-button'

const Scanner = ({navigation}) => {
  const [scanned, setScanned] = useState(false)
  const [code, setCode] = useState(null)
  const date = new Date()
  const auth = {authorization: code}
  
  const handleBarCodeScanned = ({data}) => {
    setScanned(true)
    setCode(data)
  }

  const send = useCallback(async () => {
    await sendIAmInfected(date, auth)
    console.log('You sent:', date, auth)
    navigation.navigate('Validation')
  }, [date, auth])


  return (
    <View style={styles.centeredView}>
      <View>
        <Text style={styles.text} >En utilisant l'appareil photo de votre téléphone, placer le QR code dans le cadre ci-dessous</Text>
      </View>
      <View style={styles.scanner}>
        <RNCamera
          style={{display: 'flex', alignSelf: 'center', width: 250, height: 250, borderRadius: 5, overflow: 'hidden'}}
          captureAudio={false}
          onBarCodeRead={handleBarCodeScanned}
        />

      </View>
      <View>
        {code && <Text style={styles.text}>Votre code: {code}</Text>}
      </View>
      {scanned && (
        <View style={{display: 'flex', alignSelf: 'center'}}>
          <TouchableOpacity style={styles.myButton} onPress={send} >
            <View>
              <Text style={styles.textButton}>valider</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <HomeButton navigation={navigation} />
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
    borderRadius: 10,
    padding: 5
  },
  myButton: {
    width: wp('80%'),
    maxWidth: 500,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 15
  },
  textButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: '#436d8c',
    color: 'white',
    textTransform: 'uppercase'
  },
  text: {
    color: '#436d8c',
    fontSize: wp('5%'),
    textAlign: 'center',
    paddingHorizontal: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 22
  }
});

export default Scanner

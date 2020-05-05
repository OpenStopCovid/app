import React, {useState, useEffect} from 'react'
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Icon, Button} from 'react-native-elements'
import {RNCamera} from 'react-native-camera'

const ScannerButton = () => {
  const [cameraVisible, setCameraVisible] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [hasPermission, setHasPermission] = useState(null);
  const handleBarCodeScanned = ({data}) => {
    setScanned(true)
    alert(`${data}`)
  }

  useEffect(() => {
    (async () => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
    <View style={{display: 'flex', alignSelf: 'center'}}>
      <TouchableOpacity
        name='qrcode'
        style={styles.myButton}
        onPress={() => setCameraVisible(true)}
      >
        <View style={styles.textButton}>
          <Text style={styles.text}>
            Scanner un QR Code
          </Text>
          <Icon type='material-community' name='qrcode' color='white' />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cameraVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RNCamera
              style={{ display: 'flex', alignSelf: 'center', width: 200, height: 200, borderRadius: 5, overflow: 'hidden' }}
              captureAudio={false}
              onReadCode={handleBarCodeScanned}
            />

            {scanned && <Button 
                buttonStyle={{margin: 10, borderRadius: 10, padding: 12}}
                type='outline' title={'Scanner un autre code'}
                onPress={() => setScanned(false)}
              />}
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#436d8c'}}
              onPress={() => {
                setCameraVisible(!cameraVisible)
              }}
            >
              <Text style={styles.textStyle}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  myButton: {
    width: 300,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 20
  },
  textButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 15,
    backgroundColor: '#436d8c'
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    paddingTop: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#000091',
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default ScannerButton

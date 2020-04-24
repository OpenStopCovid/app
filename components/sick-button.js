import React, {useState} from 'react'
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'



const SickButton = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
      <View>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => setModalVisible(true)}
        >
        <View style={styles.textButton}>
          <Text style={styles.text}>
            Me déclarer positif
          </Text>
          <Icon type='feather' name='user' color='white' />
        </View>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>😷</Text>
              <Text style={styles.modalText}>Pas de panique !</Text>
              <Text style={styles.modalText}>Une alerte va être envoyée</Text>
              <Text style={styles.modalText}>🧑🏻‍⚕️ 👨🏽‍⚕️ 👩🏼‍⚕️</Text>
              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#436d8c" }}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <Text style={styles.textStyle}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#000091",
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default SickButton


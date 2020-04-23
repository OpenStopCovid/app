import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View, Switch, TouchableOpacity, Vibration} from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />
};

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isAlertMode, setIsAlertMode] = useState(false)
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  if (isAlertMode) {
    Vibration.vibrate([500, 250, 500, 250])
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>OpenStopCovid</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Qui dicta minus molestiae vel !
        </Text>
      </View>
      <Separator />
      <View style={styles.containerBig}>
        <Text>Activer le pistage</Text>
        <Separator />
        <Switch
          trackColor={{ false: "gainsboro", true: "gainsboro" }}
          thumbColor={isEnabled ? "#00AC8C" : "#5770BE"}
          ios_backgroundColor="gainsboro"
          onValueChange={toggleSwitch}
          value={isEnabled}
          />
          <Separator />
          {isEnabled ?
            <Text>Activé !</Text>
            :
            <Text> </Text>
          }

        <TouchableOpacity
          style={styles.myButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textButton}>Me déclarer positif</Text>
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
                style={{ ...styles.openButton, backgroundColor: "#000091" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      {isAlertMode && (
        <View>
          <Text style={styles.alertMode}>Vous avez été en contact avec une personne diagnostiquée positive</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000091',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 40,
    paddingTop: 50
  },
  myButton: {
    width: 300,
    marginTop: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#000091',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textButton: {
    textAlign: 'center',
    color: 'snow'
  },
  text: {
    margin: 25
  },
  containerBig: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35
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
    borderRadius: 20,
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
  },
  alertMode: {
    display: 'flex',
    backgroundColor: 'red',
    color: "white",
    textAlign: "center",
    padding: 25,
    fontSize: 15,
    fontWeight: 'bold'
  }
});

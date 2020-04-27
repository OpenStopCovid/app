import React, {useState} from 'react'
import {StyleSheet, Text, View, Vibration} from 'react-native'

import Head from './components/head'
import TrackButton from './components/track-button'
import SickButton from './components/sick-button'
import ScannerButton from './components/scanner-button'
import Home from './pages/home'
import Scanner from './pages/scanner'
import InputCode from './pages/input-code'
import InputCodeSelector from './pages/input-code-selector'
import Validation from './pages/validation'

export default function App() {
  const [isAlertMode, setIsAlertMode] = useState(false)

  if (isAlertMode) {
    Vibration.vibrate([500, 250, 500, 250])
  }

  return (
    <View style={styles.container}>
      <Validation />
      {isAlertMode && (
        <View>
          <Text style={styles.alertMode}>Vous avez été en contact avec une personne diagnostiquée positive</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
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

import React, {useState} from 'react'
import {StyleSheet, Vibration} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {enableScreens} from 'react-native-screens'
import {initManually, requestPermissions} from 'react-native-dp3t-sdk'

import Home from './pages/home'
import Scanner from './pages/scanner'
import InputCode from './pages/input-code'
import InputCodeSelector from './pages/input-code-selector'
import Validation from './pages/validation'

export default function App() {
  async function testInit() {
    requestPermissions()
    await initManually(
      'org.dpppt.demo',
      'https://demo.dpppt.org/',
      'https://demo.dpppt.org/',
      'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
      'RZ0FFSndKMkErS2taR0p6QlMzM3dEOUUyaEI1K3VNYgpZcitNU2pOUGhmYzR6Q2w2amdSWkFWVHBKbE' +
      '0wSmI4RERqcDNRUDZhK2VEK1I1SFYyNzhROVN0SUhnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t'
    ).then(() => console.log('init ok !'))
  }
  testInit()
  enableScreens()

  const [isAlertMode, setIsAlertMode] = useState(false)
  const Stack = createStackNavigator()
  const options = {headerShown: false}

  if (isAlertMode) {
    Vibration.vibrate([500, 250, 500, 250])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Bienvenue' component={Home} options={options} />
        <Stack.Screen name='Choix du code' component={InputCodeSelector} options={options} />
        <Stack.Screen name='Entrée AlphaNumérique' component={InputCode} options={options} />
        <Stack.Screen name='Scanner QR-Code' component={Scanner} options={options} />
        <Stack.Screen name='Validation' component={Validation} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
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

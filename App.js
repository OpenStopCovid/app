import React, {useState} from 'react'
import {StyleSheet, Vibration} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {enableScreens} from 'react-native-screens'
import {initWithDiscovery, requestPermissions} from 'react-native-dp3t-sdk'

import Home from './pages/home'
import Scanner from './pages/scanner'
import InputCode from './pages/input-code'
import InputCodeSelector from './pages/input-code-selector'
import Validation from './pages/validation'

export default function App() {
  async function testInit() {
    requestPermissions()
    await initWithDiscovery(
        'org.dpppt.demo',
        'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
        'RZ0FFWTc3MFZEWjJlZjZCYjh0UXZYWVJpcUFaemtHLwpwNWs0U3pTV3FRY00zNzlqTVN6c3JOaU5nc0' +
        'hWZlRPeGFqMUFzQ3RrNmJVUDV1cDc3RU5nckVzVkh3PT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t',
        true
    ).then(() => console.log('init ok !'))
  }

  testInit()
  enableScreens()

  const Stack = createStackNavigator()
  const options = {headerShown: false}


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

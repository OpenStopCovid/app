import React, {useState} from 'react'
import {StyleSheet, Text, View, Vibration} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {enableScreens} from 'react-native-screens'

import Home from './pages/home'
import Scanner from './pages/scanner'
import InputCode from './pages/input-code'
import InputCodeSelector from './pages/input-code-selector'
import Validation from './pages/validation'

export default function App() {
  enableScreens()
  const [isAlertMode, setIsAlertMode] = useState(false)
  const Stack = createStackNavigator()
  const options= {headerShown: false}

  if (isAlertMode) {
    Vibration.vibrate([500, 250, 500, 250])
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Bienvenue' component={Home} options={options} />
        <Stack.Screen name='Choix du code' component={InputCodeSelector} options={options} />
        <Stack.Screen name='Entrée AlphaNumérique' component={InputCode} options={options} />
        <Stack.Screen name='Scanner QR-Code' component={Scanner} options={options}/>
        <Stack.Screen name='Validation' component={Validation} options={options}/>
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

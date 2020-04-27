import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const HomeButton = ({navigation}) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate('Bienvenue')}>
        <Text style={{textDecorationLine: 'underline', padding: 15}}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    )
}

export default HomeButton

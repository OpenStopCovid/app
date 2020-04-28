import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const HomeButton = ({navigation}) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate('Bienvenue')} style={{position: 'absolute', bottom: 10}}>
        <Text style={{textDecorationLine: 'underline', color: '#436d8c'}}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    )
}

export default HomeButton

import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const HomeButton = ({navigation}) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate('Bienvenue')} style={{position: 'absolute', bottom: 20}}>
        <Text style={{textDecorationLine: 'underline', color: '#436d8c'}}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    )
}

export default HomeButton

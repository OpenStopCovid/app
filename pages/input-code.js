import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import HomeButton from '../components/home-button'

const InputCode = ({navigation}) => {
  const [value, onChangeText] = useState()
  return (
    <View style={styles.centeredView}>
      <Text style={styles.text}>Entrez le code fourni suite à votre diagnostic</Text>
      <TextInput
        style={styles.input}

        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.myButton}
        onPress={() => navigation.navigate('Validation')}
      >
        <Text style={styles.textButton}>valider</Text>
      </TouchableOpacity>
      <HomeButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  input: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#436d8c',
    height: 50,
    width: wp('90%'),
    maxWidth: 600,
    margin: 10,
    padding: 10
  },
   text: {
    color: '#436d8c',
    textAlign: 'center',
    fontSize: 20,
    padding: 15
  },
  myButton: {
    width: wp('80%'),
    maxWidth: 400,
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
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor: '#436d8c'
  }
});

export default InputCode

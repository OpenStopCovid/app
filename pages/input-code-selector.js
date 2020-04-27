import React, {useState} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'

import Separator from '../components/separator.js'

const InputCodeSelector = () => {
  return (
    <View style={styles.centeredView}>
      <View style={{flex: .4}} >
        <Text style={styles.title}>Je suis contaminé</Text>
        <Separator />
        <Text style={styles.subTitle} >Afin de continuer, assurez-vous d'être en possession d'un code personnel fourni par un professionel de santé suite à un diagnostique.</Text>
      </View>
      <View style={{flex: .4}}>
        <Text style={styles.smallTitle} >Quel type de code souhaitez-vous utiliser ?</Text>
        <TouchableOpacity style={styles.myButton}>
          <View style={styles.textButton}>
            <Text style={styles.text}>alpha-numerique</Text>
            <Icon type='feather' name='hash' color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton}>
          <View style={styles.textButton}>
            <Text style={styles.text}>qr-code</Text>
            <Icon type='material-community' name='qrcode' color='white'  size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
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
    justifyContent: 'space-between',
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
  title: {
    fontSize: 32,
    flex: .3,
    textAlign: 'center',
    color: '#436d8c',
    textTransform: 'uppercase'
  },
  subTitle: {
    textAlign: 'center',
    color: '#436d8c',
    paddingHorizontal: 15,
    fontSize: 16
  },
  smallTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#436d8c',
    paddingHorizontal: 15
  }
});

export default InputCodeSelector

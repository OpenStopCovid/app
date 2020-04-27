import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from 'react-native-elements'

const Validation = () => {
  return (
      <View style={styles.centeredView}>
        <Text style={styles.title}>Votre déclaration a été validée</Text>
        <Icon type='feather' name='check-circle' size={150} color='#436d8c' />
        <Text style={styles.subTitle}>Merci pour votre coopération</Text>
      </View>
    )
}

const styles = StyleSheet.create({
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
      padding: 15
    },
    subTitle: {
      textAlign: 'center',
      color: '#436d8c',
      padding: 25,
      fontSize: 26
    }
  })

export default Validation

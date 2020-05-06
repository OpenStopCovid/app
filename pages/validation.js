import React, {useState, useCallback, useEffect} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {Icon} from 'react-native-elements'
import {useDp3tStatus} from 'react-native-dp3t-sdk'

import HomeButton from '../components/home-button'

const Validation = ({navigation}) => {
  const [status] = useDp3tStatus()

  return (
      <View style={styles.centeredView}>
        <Text style={styles.title}>Votre déclaration a été validée</Text>
        <Icon type='feather' name='check-circle' size={150} color='#436d8c' />
        <Text style={styles.subTitle}>Merci pour votre coopération</Text>
        <HomeButton navigation={navigation} />
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
      textAlign: 'center',
      color: '#436d8c',
      padding: 25

    },
    subTitle: {
      textAlign: 'center',
      color: '#436d8c',
      padding: 25,
      fontSize: 26
    }
  })

export default Validation

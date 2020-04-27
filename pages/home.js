import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import SickButton from '../components/sick-button'
import TrackButton from '../components/track-button'

const Home = () => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.header}>
        <SickButton />
        <Text style={styles.subText} >uniquement sur diagnostic d'un professionel de santé</Text>
      </View>
      <View style={styles.section}>
        <TrackButton />
      </View>
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
  header: {
    alignItems: 'center',
    flex: .4
  },
  section: {
    alignItems: 'center',
    flex: .6
  },
  subText: {
    color: '#436d8c',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40
  }
})

export default Home

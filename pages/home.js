import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import SickButton from '../components/sick-button'
import TrackButton from '../components/track-button'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SickButton navigation={navigation} />
        <Text style={styles.subText} >uniquement sur diagnostic d'un professionnel de santé</Text>
      </View>
      <View style={styles.section}>
        <TrackButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginTop: 25
  },
  section: {
    alignItems: 'center',
    marginTop: 55
  },
  subText: {
    color: '#436d8c',
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 40
  }
})

export default Home

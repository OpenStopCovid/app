import React, {useCallback} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import {useDp3tStatus} from 'react-native-dp3t-sdk'

import SickButton from '../components/sick-button'
import TrackButton from '../components/track-button'

const Home = ({navigation}) => {
  const [status] = useDp3tStatus()

  const handleStatus = useCallback(() => {
    console.log(status)
  }, [status])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SickButton navigation={navigation} />
        <Text style={styles.subText} >uniquement sur diagnostic d'un professionnel de santé</Text>
      </View>
      <View style={styles.section}>
        <TrackButton />
        <Button onPress={handleStatus} title='Show Status' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('40%')
  },
  section: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('60%')
  },
  subText: {
    color: '#436d8c',
    fontSize: wp('5.75%'),
    textAlign: 'center',
    width: wp('90%')
  }
})

export default Home

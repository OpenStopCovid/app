import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'


import Separator from '../components/separator'
import HomeButton from '../components/home-button'

const InputCodeSelector = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.midHeight}>
        <Text style={styles.title}>Je suis contaminé</Text>
        <Separator />
        <Text style={styles.subTitle}>Afin de continuer, assurez-vous d'être en possession d'un code personnel fourni par un professionnel de santé suite à un diagnostic.</Text>
      </View>
      <View style={styles.midHeight}>
        <Text style={styles.smallTitle}>Quel type de code souhaitez-vous utiliser ?</Text>
        <TouchableOpacity style={styles.myButton} onPress={() => navigation.navigate('Entrée AlphaNumérique')}>
          <View style={styles.textButton}>
            <Text style={styles.text}>alpha-numerique</Text>
            <Icon type='feather' name='hash' color='white' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.myButton} onPress={() => navigation.navigate('Scanner QR-Code')}>
          <View style={styles.textButton}>
            <Text style={styles.text}>qr-code</Text>
            <Icon type='material-community' name='qrcode' color='white'  size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <HomeButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  midHeight: {
    height: hp('45%'),
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  myButton: {
    width: wp('80%'),
    maxWidth: 400,
    margin: 10,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#436d8c',
    alignSelf: 'center'
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
  title: {
    fontSize: wp('8%'),
    textAlign: 'center',
    color: '#436d8c',
    textTransform: 'uppercase'
  },
  subTitle: {
    textAlign: 'center',
    color: '#436d8c',
    paddingHorizontal: 15,
    fontSize: wp('5%')
  },
  smallTitle: {
    textAlign: 'center',
    fontSize: wp('6%'),
    color: '#436d8c',
    paddingHorizontal: 15,
  }
});

export default InputCodeSelector

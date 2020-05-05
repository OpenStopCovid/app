import React, {useState} from 'react'
import {Modal, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {Icon} from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const SickButton = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
      <View>
        <TouchableOpacity
          style={styles.myButton}
          onPress={() => navigation.navigate('Choix du code')}
        >
        <View style={styles.textButton}>
          <Text style={styles.text}>
            Me déclarer positif
          </Text>
          <Icon type='feather' name='user' color='white' />
        </View>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  myButton: {
    width: wp('70%'),
    maxWidth: 500,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 15
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
  }
})

export default SickButton


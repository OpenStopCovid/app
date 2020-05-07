import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Icon} from 'react-native-elements'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

const SickButton = ({navigation}) => {

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
    width: wp('80%'),
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


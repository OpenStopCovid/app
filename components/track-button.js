import React, {useState} from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const TrackButton = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(!isEnabled)

  return (
    <View style={styles.centeredView}>
      <Text style={styles.title} >contact tracing</Text>
      <TouchableOpacity
        style={isEnabled ? styles.dotted : styles.myButton}
        onPress={toggleSwitch}
      >
        <View style={isEnabled ? styles.disabled : styles.textButton}>
          <Text style={isEnabled ? styles.clearText : styles.text}>
            {isEnabled ? 'désactiver' : 'activer'}
          </Text>
        </View>
      </TouchableOpacity>
      {isEnabled ?
        <Text>Activé !</Text>
        :
        <Text> </Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#436d8c',
    fontSize: 35
  },
  myButton: {
    width: 200,
    height: 200,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 180,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 15
  },
  dotted: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 180,
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderStyle: 'dashed',
    margin: 15
  },
  textButton: {
    justifyContent: 'center',
    width: 190,
    height: 190,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 180,
    backgroundColor: '#436d8c'
  },
  disabled: {
    justifyContent: 'center',
    width: 196,
    height: 196,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 180,
    backgroundColor: 'whitesmoke'
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 32
  },
  clearText: {
    color: 'darkgrey',
    textTransform: 'uppercase',
    fontSize: 28
  }
});

export default TrackButton

import React from 'react'
import {StyleSheet, View} from 'react-native'

const Separator = () => {
  return <View style={styles.separator} />
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 18,
    borderBottomColor: '#436d8c',
    borderBottomWidth: 1,
    width: 250,
    alignSelf: 'center'
  }
})

export default Separator

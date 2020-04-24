import React from 'react'
import {StyleSheet, View} from 'react-native'

const Separator = () => {
  return <View style={styles.separator} />
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export default Separator

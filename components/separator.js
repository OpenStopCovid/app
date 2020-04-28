import React from 'react'
import {StyleSheet, View} from 'react-native'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen'

const Separator = () => {
  return <View style={styles.separator} />
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 18,
    borderBottomColor: '#436d8c',
    borderBottomWidth: 1,
    width: wp('65%'),
    alignSelf: 'center'
  }
})

export default Separator

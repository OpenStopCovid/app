import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Separator from './separator'

const Head = () => {

  return (
      <View>
        <Text style={styles.title}>OpenStopCovid</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Qui dicta minus molestiae vel !
        </Text>
        <Separator />
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    paddingTop: 50,
    textAlign: 'center'
  },
  text: {
    margin: 25
  },
});

export default Head

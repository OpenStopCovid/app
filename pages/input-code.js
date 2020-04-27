import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

const InputCode = () => {
	const [value, onChangeText] = useState()
	return (
		<View>
			<Text style={styles.text}>Entrez le code fourni suite à votre diagnostique</Text>
			<TextInput
	      style={styles.input}

	      onChangeText={text => onChangeText(text)}
	      value={value}
    	/>
    	<TouchableOpacity
        style={styles.myButton}
        onPress={() => {
        	console.log(value)
        	onChangeText('')
        }}
      >
      	<Text style={styles.textButton}>valider</Text>
      </TouchableOpacity>
    	<Text style={styles.text}>retour au choix du code</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 3,
		borderRadius: 10,
		borderColor: '#436d8c',
		height: 50,
		margin: 10,
		padding: 10
	},
	 text: {
    color: '#436d8c',
    textAlign: 'center',
    fontSize: 20,
    padding: 15
  },
  myButton: {
    width: 300,
    padding: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#436d8c',
    margin: 20
  },
  textButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    padding: 15,
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 25,
    backgroundColor: '#436d8c'
  },
});

export default InputCode

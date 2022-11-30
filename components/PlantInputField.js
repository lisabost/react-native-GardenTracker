import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";

const PlantInputField = (props) => {
	const [item, setItem] = useState();
	
	const handleAdd = (value) => {
		if (value != '' && value != null) {
			console.log(value);
			props.addPlant(value);
			setItem(null);
		}
	}

	return (
		<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<TextInput style={styles.inputField} value={ item } onChangeText={ text => setItem(text)} placeholder={'Add a plant'} placeholderTextColor={'#000'}/>
			<TouchableOpacity onPress={() => handleAdd(item)}>
				<View style={styles.button}>
					<MaterialIcons name="keyboard-arrow-up" size={24} color='black' />
				</View>
			</TouchableOpacity>
		</KeyboardAvoidingView>
  )
}

export default PlantInputField

const styles = StyleSheet.create({
	container: {
        borderColor: '#000',
        backgroundColor: '#90c6ee',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#000',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
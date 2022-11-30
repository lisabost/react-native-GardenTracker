import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

	const navigation = useNavigation()

	const handleSignOut = () => {
		auth
		.signOut()
		.then(() => {
			navigation.replace("Login")
		})
		.catch((error) => {
			alert(error.message)
		})
	}
	
	const moveToPlantList = () => {
		navigation.replace("PlantList")
	}

	return (
		<View style={styles.container}>
		<Text>Email: { auth.currentUser?.email }</Text>
		<TouchableOpacity
			style={styles.button}
			onPress={handleSignOut}
		>
			<Text style={styles.buttonText}>Sign Out</Text>
		</TouchableOpacity>
		<TouchableOpacity
			style={styles.button}
			onPress={moveToPlantList}
			>
				<Text>Plant List</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#0782F9',
		width: '60%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 40,
	},
	buttonText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 16,
	},
})
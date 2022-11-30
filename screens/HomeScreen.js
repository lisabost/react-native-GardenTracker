import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
		navigation.navigate("PlantList")
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Garden Tracking</Text>
			<Text style={styles.subtitle}>Welcome to the garden tracking app. Keep track of what plants you want to plant and any notes about your garden plots.</Text>
			<Text>Email: {auth.currentUser?.email}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={handleSignOut}
			>
				<Text style={styles.buttonText}>Sign Out</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#90ee90',
	},
	title: {
		color: 'black',
		fontSize: 48,
		fontWeight: '700',
	},
	subtitle: {
		color: 'black',
		fontSize: 16,
		fontWeight: '700',
		margin: 20
	},
	button: {
		backgroundColor: '#90C6EE',
		width: '60%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 40,
	},
	buttonText: {
		color: 'black',
		fontWeight: '700',
		fontSize: 16,
	},
})
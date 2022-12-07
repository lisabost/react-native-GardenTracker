import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const ViewNoteScreen = ({ route, navigation }) => {
	const { id, title, note } = route.params;

	const handleEditNote = () => {
		
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<Text style={styles.heading}>{JSON.stringify(title)}</Text>
				<Text style={styles.subheading}>{JSON.stringify(note)}</Text>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} 
						onPress={()=> { navigation.navigate("DrawerNavigator", { screen: "Add Note", params: {editId: id, editTitle: title, editNote: note, editing: true} }) }}
					>
						Edit Note
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText} onPress={() => { navigation.navigate("DrawerNavigator", { screen: "Garden Notes" }) }}>Return to Notes</Text>
				</TouchableOpacity>
			</View>

		</SafeAreaView>
	)
}

export default ViewNoteScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#90ee90',
		paddingTop: 0,
	},
	heading: {
		color: '#000',
		fontSize: 24,
		fontWeight: '700',
		marginLeft: 20,
	},
	subheading: {
		color: '#000',
		fontSize: 14,
		fontWeight: '400',
		marginLeft: 20,
	},
	buttonContainer: {
		width: '100%',
		paddingHorizontal: 20,
		marginBottom: 10
	},
	button: {
		backgroundColor: '#90C6EE',
		width: '100%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginBottom: 15,
	},
	buttonText: {
		color: 'black',
		fontWeight: '700',
		fontSize: 16,
	},
})
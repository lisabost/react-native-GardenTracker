import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db, auth } from '../firebase';

const NoteInputScreen = () => {
	const [note, setNote] = useState("");
	const [title, setTitle] = useState("");
	const navigation = useNavigation();

	const handleAddNote = (title, note) => {
		// save our note to the database
		if (title != '' && title != null && note != '' && note != null) {
			let noteToSave = {
				title: title,
				note: note,
			}
			db.collection('users').doc(auth.currentUser.uid).collection('notes').add(noteToSave)
				.then(() => {
					console.log("Note saved");
				})
				.catch((error) => {
					alert(error.message);
				});
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Add Notes About Your Garden </Text>
			<View style={styles.inputContainer}>
				<TextInput value={title} onChangeText={text => setTitle(text)} placeholder="Enter title" placeholderTextColor={'#000'} style={styles.input} />
				<TextInput multiline numberOfLines={8} value={note} onChangeText={text => setNote(text)} placeholder="Enter note..." placeholderTextColor={'#000'} style={styles.input} />
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity onPress={ () => {handleAddNote(title, note)} } style={styles.button}>
					<Text style={styles.buttonText}>Add Note</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default NoteInputScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#90ee90',
		paddingHorizontal: 20,
	},
	heading: {
		color: '#000',
		fontSize: 24,
		fontWeight: '700',
		marginBottom: 20
	},
	inputContainer: {
		width: '100%',
	},
	input: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginBottom: 20,
		textAlignVertical: "top",
	},
	buttonContainer: {
		width: '100%',
	},
	button: {
		backgroundColor: '#90C6EE',
		width: '100%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonText: {
		color: 'black',
		fontWeight: '700',
		fontSize: 16,
	},
})
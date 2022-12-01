import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import NoteListItem from '../components/NoteListItem'
import { db, auth } from '../firebase'

const GardenNotesScreen = () => {
	const [noteList, setNoteList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getNotes();
	}, []);

	const getNotes = async () => {
		const response = await db.collection('users').doc(auth.currentUser.uid).collection('notes').get()
			.then((snapshot) => {
				let list = [];
				snapshot.forEach((doc) => {
					const data = doc.data();
					list.push({ id: doc.id, title: data.title, note: data.note })
				})
				setNoteList(list);
				setLoading(false);
			})
			.catch((error) => {
				alert(error.message);
			});
	}

	const handleView = () => {}
	const handleEdit = () => {}
	const handleDelete = () => {}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>Garden Notes</Text>
			<Text style={styles.subheading}>Keep track of ideas for your garden.</Text>
			<ScrollView style={styles.scrollView}>
				{ loading &&
					<View style={[styles.itemContainer]}>
						<Text>Loading...</Text>
					</View>
				}
				{ noteList.length > 0 && 
					noteList.map((note, index) => {
						return (
							<View key={note.id} style={styles.itemContainer}>
								<NoteListItem index={index + 1} note={note} onView={() => {}} onEdit={() => {}} onDelete={() => {}} />
							</View>
						)
					})
				}
			</ScrollView>
		</SafeAreaView>
	)
}

export default GardenNotesScreen

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
	scrollView: {
		paddingTop: 0,
		marginTop: 0,
		marginBottom: 70,
	},
	itemContainer: {
		marginTop: 10,
	}
})
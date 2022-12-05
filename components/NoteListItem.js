import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const NoteListItem = (props) => {
	const { index, note, deleteNote} = props;

	const navigation = useNavigation();

	const handleView = (note) => {
		navigation.navigate("ViewNote", {id: note.id, title: note.title, note: note.note});
	 }

	return (
		<View style={styles.container}>
			<View style={styles.indexContainer}>
				<Text style={styles.index}>{index}</Text>
			</View>
			<View style={styles.itemContainer}>
				<Text style={styles.item}>{note.title}</Text>
				<TouchableOpacity onPress={() => handleView(note)}>
					<MaterialIcons style={styles.icon} name="preview" size={20} color="000" />
				</TouchableOpacity>
				{/* <TouchableOpacity onPress={() => {}}>
					<MaterialIcons style={styles.icon} name="edit" size={20} color="000" />
				</TouchableOpacity> */}
				<TouchableOpacity onPress={() => deleteNote(note.id)}>
					<MaterialIcons style={styles.icon} name="delete" size={20} color="000" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default NoteListItem

const styles = StyleSheet.create({
	container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#90C6EE',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#000',
        fontSize: 20,
    },
    itemContainer: {
        backgroundColor: '#90C6EE',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    item: {
        color: '#000',
        width: '80%',
        fontSize: 16,
    },
    icon: {
        // marginLeft: 10,
    },
})
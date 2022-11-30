import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";
import React from 'react'

const PlantItem = (props) => {
	const { index, plant, deletePlant } = props;
	return (
		<View style={styles.container}>
			<View style={styles.indexContainer}>
				<Text style={styles.index}>{ index }</Text>
			</View>
			<View style={styles.itemContainer}>
				<Text style={styles.item}>{ plant.name }</Text>
				<TouchableOpacity onPress={() => deletePlant(plant.id)}>
					<MaterialIcons style={styles.delete} name="delete" size={18} color="000" />
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default PlantItem

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
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});
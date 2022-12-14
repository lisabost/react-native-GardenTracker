import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../firebase';
import PlantItem from '../components/PlantItem';
import PlantInputField from '../components/PlantInputField';

const PlantListScreen = () => {
	const [plantList, setPlantList] = useState([]);
	const [loading, setLoading] = useState(true);

	const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			getPlants();
			if(getPlants.length) getPlants();
		});
		return unsubscribe;
	}, [navigation]);

	const getPlants = async () => {
		const response = await db.collection('users').doc(auth.currentUser.uid).collection('plants').get()
			.then(snapshot => {
				let list = [];
				snapshot.forEach(doc => {
					const data = doc.data();
					list.push({ id: doc.id, name: data.name })
				})
				setPlantList(list);
				setLoading(false);
			})
	}

	const handleAdd = async (item) => {
		let itemToSave = {
			name: item
		};
		const docRef = db.collection('users').doc(auth.currentUser.uid).collection('plants').add(itemToSave)
			.then(() => {
				console.log('added plant');
			})
			.catch((error) => {
				alert(error.message)
			});
		itemToSave.id = docRef.id;
		getPlants();
	}

	const handleDelete = async (id) => {
		db.collection('users').doc(auth.currentUser.uid).collection('plants').doc(id).delete()
			.then(() => {
				console.log('deleted plant with id of: ', id)
				getPlants()
			})
			.catch((error) => {
				alert(error.message)
			})
	}



	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.heading}>What's Planting?</Text>
			<Text style={styles.subheading}>Keep track of what you want to plant in your garden.</Text>
			<ScrollView style={[styles.scrollView]}>
				{ loading && 
					<View style={[styles.itemContainer]}>
						<Text>Loading...</Text>
					</View>
				}
				{ plantList.length > 0 &&
					plantList.map((plant, index) => {
						return (
							<View key={plant.id} style={[styles.itemContainer]}>
								<PlantItem index={index + 1} plant={plant} deletePlant={handleDelete} />
							</View>
						)
					})
				}
			</ScrollView>
			<PlantInputField addPlant={handleAdd} />
		</SafeAreaView>
	)
}

export default PlantListScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#90ee90',
		paddingTop: 0,
	},
	heading: {
		color: '#000',
		fontSize: 30,
		fontWeight: '700',
		marginLeft: 20,
		alignSelf: 'center',
	},
	subheading: {
		color: '#000',
		fontSize: 14,
		fontWeight: '400',
		marginLeft: 20,
		alignSelf: 'center',
	},
	scrollView: {
		paddingTop: 0,
		marginTop: 0,
		marginBottom: 70,
	},
	itemContainer: {
		marginTop: 10,
	}
});
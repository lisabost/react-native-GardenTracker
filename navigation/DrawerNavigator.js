import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { auth } from '../firebase';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PlantListScreen from '../screens/PlantListScreen';
import GardenNotesScreen from '../screens/GardenNotesScreen';
import NoteInputScreen from '../screens/NoteInputScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const [ route, setRoute ] = useState('');
	const [ isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setRoute("Plant List")
				setIsLoggedIn(true);
			}
			else {
				setRoute("Start")
				setIsLoggedIn(false);
			}
		})

		return unsubscribe
	}, [])

  return (
	<Drawer.Navigator initialRouteName={route}>
		{ !isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Sign In" component={LoginScreen} />}
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Plant List" component={PlantListScreen} />}
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Garden Notes" component={GardenNotesScreen} /> }
		{ isLoggedIn && <Drawer.Screen options={{headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Add Note" component={NoteInputScreen} /> } 
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Sign Out" component={HomeScreen} /> }
	</Drawer.Navigator>
  )
}

export default DrawerNavigator


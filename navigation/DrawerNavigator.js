import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { MainStackNavigator, PlantListStackNavigator } from './StackNavigator';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PlantListScreen from '../screens/PlantListScreen';
import { auth } from '../firebase';
import GardenNotesScreen from '../screens/GardenNotesScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	const [ route, setRoute ] = useState('');
	const [ isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setRoute("Home")
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
		{ !isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Start" component={MainStackNavigator} />}
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Plant List" component={PlantListStackNavigator} />}
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Garden Notes" component={GardenNotesScreen} /> }
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Sign Out" component={HomeScreen} /> }
	</Drawer.Navigator>
  )
}

export default DrawerNavigator


import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { MainStackNavigator, PlantListStackNavigator } from './StackNavigator';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PlantListScreen from '../screens/PlantListScreen';
import { auth } from '../firebase';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ( {isLoggedIn} ) => {
  return (
	<Drawer.Navigator initialRouteName='Start'>
		<Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Start" component={MainStackNavigator} />
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Plant List" component={PlantListStackNavigator} /> }
		{ isLoggedIn && <Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Sign Out" component={HomeScreen} /> }
	</Drawer.Navigator>
  )
}

export default DrawerNavigator


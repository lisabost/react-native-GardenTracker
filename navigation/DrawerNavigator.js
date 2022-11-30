import 'react-native-gesture-handler';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import { PlantListStackNavigator } from './StackNavigator';
import HomeScreen from '../screens/HomeScreen';
import PlantListScreen from '../screens/PlantListScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
	<Drawer.Navigator>
		<Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Plant List" component={PlantListStackNavigator} />
		<Drawer.Screen options={{ headerTitle: '', headerStyle: { backgroundColor: '#90C6EE' } }} name="Sign Out" component={BottomTabNavigator} />
	</Drawer.Navigator>
  )
}

export default DrawerNavigator


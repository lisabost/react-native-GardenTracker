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
		<Drawer.Screen options={{ headerTitle: '' }} name="Plant List" component={PlantListStackNavigator} />
		<Drawer.Screen options={{ headerTitle: '' }} name="Sign Out" component={HomeScreen} />
	</Drawer.Navigator>
  )
}

export default DrawerNavigator


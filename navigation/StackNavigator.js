import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PlantListScreen from '../screens/PlantListScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
	<Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
		<Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
		<Stack.Screen options={{ headerShown: false }} name="Help" component={DrawerNavigator} />
	</Stack.Navigator>
  )
}

const PlantListStackNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen options={{ headerShown: false }} name="Plants" component={PlantListScreen} />
		</Stack.Navigator>
	)
}

export {MainStackNavigator, PlantListStackNavigator}

const styles = StyleSheet.create({})
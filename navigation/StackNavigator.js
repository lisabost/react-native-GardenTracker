import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NoteInputScreen from '../screens/NoteInputScreen';
import PlantListScreen from '../screens/PlantListScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
	<Stack.Navigator initialRouteName='Home'>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
		<Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
		<Stack.Screen options={{ headerShown: false }} name="AddNote" component={NoteInputScreen} />
		<Stack.Screen options={{ headerShown: false }} name="DrawerNavigator" component={DrawerNavigator} />
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
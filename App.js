import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ViewNoteScreen from './screens/ViewNoteScreen';
import MainStackNavigator from './navigation/StackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }}/>
					<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
					<Stack.Screen name="ViewNote" component={ViewNoteScreen} options={{ headerShown: false }}/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});

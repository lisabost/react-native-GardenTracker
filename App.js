import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PlantListScreen from './screens/PlantListScreen';
import MainStackNavigator from './navigation/StackNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth, db } from './firebase';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }}/>
					<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
					{/* <Stack.Screen /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});

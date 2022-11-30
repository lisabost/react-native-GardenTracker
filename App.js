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



export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<DrawerNavigator /> 
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainStackNavigator } from './StackNavigator';
import { PlantListStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
	<Tab.Navigator>
		<Tab.Screen name="Logout" component={MainStackNavigator} />
		<Tab.Screen name="Garden Plants" component={PlantListStackNavigator} />
	</Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})
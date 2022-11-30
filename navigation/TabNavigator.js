import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator } from './StackNavigator';
import { PlantListStackNavigator } from './StackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={{ barStyle: { backgroundColor: '#90C6EE', }, }}>
			<Tab.Screen options={{
				headerShown: false,
				tabBarLabel: 'Home',
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="home" color={color} size={26} />
				),
			}} name="Logout" component={MainStackNavigator} />
			<Tab.Screen options={{
				headerShown: false,
				tabBarLabel: 'Garden Plants',
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="format-list-numbered" color={color} size={26} />
				),
			}} name="Garden Plants" component={PlantListStackNavigator} />
		</Tab.Navigator>
	)
}


export default BottomTabNavigator

const styles = StyleSheet.create({})
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
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState();

	// const navigation = useNavigation();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				// navigation.replace("Home");
				setIsLoggedIn(true);
				db
				.collection('users')
				.doc(user.uid)
				.get()
				.then((doc) => {
					if(!doc || !doc.exists) {
						db.collection('users').doc(user.uid).set({
							email: user.email,
							uid: user.uid,
						})
					}
				})
			}
		})

		return unsubscribe
	}, [])

	const handleLogin = () => {
		auth
		.signInWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			setUser(userCredentials.user);
			console.log('Logged in with: ', user.email);
		})
		.catch((error) => {
			alert(error.message);
		})
	}


	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<DrawerNavigator isLoggedIn={isLoggedIn} /> 
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({});

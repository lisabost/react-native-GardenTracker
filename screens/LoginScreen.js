import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const navigation = useNavigation()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.replace("Home");
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

	const handleSignUp = () => {
		auth
		.createUserWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			const user = userCredentials.user;
			setIsLoggedIn(true);
			console.log('Registered in with: ', user.email);
		})
		.catch((error) => {
			alert(error.message);
		})
	}

	const handleLogin = () => {
		auth
		.signInWithEmailAndPassword(email, password)
		.then((userCredentials) => {
			const user = userCredentials.user;
			console.log('Logged in with: ', user.email);
		})
		.catch((error) => {
			alert(error.message);
		})
	}

  return (
	<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
	  <View style={styles.inputContainer}>
		<TextInput
			placeholder='Email'
			value={ email }
			onChangeText={(text) => setEmail(text)}
			style={styles.input}/>
					<TextInput
			placeholder='Password'
			value={ password }
			onChangeText={(text) => setPassword(text)}
			style={styles.input}
			secureTextEntry />
	  </View>
	  <View style={styles.buttonContainer}>
		<TouchableOpacity
			onPress={handleLogin}
			style={styles.button}
		>
			<Text style={styles.buttonText}>Login</Text>
		</TouchableOpacity>
		<TouchableOpacity
			onPress={handleSignUp}
			style={[styles.button, styles.buttonOutline]}
		>
			<Text style={styles.buttonOutlineText}>Register</Text>
		</TouchableOpacity>
	  </View>
	</KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#90ee90',
	},
	inputContainer: {
		width: '80%',
	},
	input: {
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	button: {
		backgroundColor: '#90C6EE',
		width: '100%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonOutline: {
		backgroundColor: 'white',
		marginTop: 5,
		borderColor: '#90C6EE',
		borderWidth: 2,
	},
	buttonText: {
		color: 'black',
		fontWeight: '700',
		fontSize: 16,
	},
	buttonOutlineText: {
		color: '#90C6EE',
		fontWeight: '700',
		fontSize: 16,
	},
})
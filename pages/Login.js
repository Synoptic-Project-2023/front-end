
import * as React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from './modal/ui/MenuButton';
import { useTranslation } from 'react-i18next';

export default function Profile({ navigation, route }, props) {
	const { t } = useTranslation();
	const { currentUser, logIn, API_BASE } = route.params;

	const[email, setEmail] = React.useState([]);
	const[password, setPassword] = React.useState([]);

	function handleLogIn(){
		const loginData = {
			email,
			password
		}
		fetch(API_BASE + '/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginData)
		}).then(
			res => res.json()
		).then(
			data => {
				logIn(data._id)
				navigation.navigate('Map')
			}
		).catch(e => { console.log(e) })
	}

	function openRegister(){
		navigation.navigate('Register', {API_BASE})
	}


	return (

		<View style={styles.view}>

			<Text
				style={styles.label}
			>
				{t('email')}
			</Text>

			<TextInput
				style={styles.input}
				placeholder="example@gmail.com"
				autoCapitalize='none'
				onChangeText={setEmail}
			/>


			<Text
				style={styles.label}
			>
				{t('password')}
			</Text>

			<TextInput
				style={styles.input}
				placeholder="password"
				autoCapitalize='none'
				secureTextEntry={true}
				onChangeText={setPassword}
			/>

			<MenuButton
				text={t('log in')}
				onPress={() => handleLogIn()}
			/>

			<Text
				style={styles.label}
			>
				{t("don't have an account")}
			</Text>

		<MenuButton
				text={t('register')}
				onPress={() => openRegister()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		flex: 1,
		left: "10%",
		top: "10%",
		width: "80%",
		height: "80%",
	},

	label: {

		fontSize: 36,
	},

	input: {

		height: 48,
		backgroundColor: "#f0f0f0",
		borderWidth: 2,
		borderRadius: 10,
		padding: 10,
	}
})

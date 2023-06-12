
import * as React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from './modal/ui/MenuButton';
import { useTranslation } from 'react-i18next';

export default function Profile({ navigation, route }, props) {
	const { t } = useTranslation();
	const { API_BASE } = route.params;

	const[email, setEmail] = React.useState([]);
	const[password, setPassword] = React.useState([]);
    const[username, setUsername] = React.useState([]);

	function handleRegistration(){
		const registerData = {
			email,
			password,
            username
		}
		fetch(API_BASE + '/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(registerData) 
		}).then(
			res => res.json()
		).then(
			data => {
				console.log(data._id)
				navigation.goBack()
			}
		).catch(e => { console.log(e) })
	}


	return (

		<View style={styles.view}>

			<Text
				style={styles.label}
			>
				{t("email")}
			</Text>

			<TextInput
				style={styles.input}
				placeholder="example@gmail.com"
				onChangeText={setEmail}
				autoCapitalize='none'
			/>

			<Text
				style={styles.label}
			>
				{t("your name")}
			</Text>

			<TextInput
				style={styles.input}
				placeholder="Jeff Geofferson"
				onChangeText={setUsername}
			/>

			<Text
				style={styles.label}
			>
				{t('password')}
			</Text>

			<TextInput
				style={styles.input}
				placeholder="password"
				onChangeText={setPassword}
				autoCapitalize='none'
				secureTextEntry={true}
			/>

			<MenuButton
				text={t('register')}
				onPress={() => handleRegistration()}
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

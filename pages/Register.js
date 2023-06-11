
import * as React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from './modal/ui/MenuButton';

export default function Profile({ navigation, route }, props) {
	
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
				Email
			</Text>

			<TextInput
				style={styles.input}
				placeholder="example@gmail.com"
				onChangeText={setEmail}
			/>

      
			<Text
				style={styles.label}
			>
				Your Name
			</Text>

			<TextInput
				style={styles.input}
				placeholder="Jeff Geofferson"
				onChangeText={setUsername}
			/>

			<Text
				style={styles.label}
			>
				Password
			</Text>

			<TextInput
				style={styles.input}
				placeholder="password"
				onChangeText={setPassword}
			/>

			<MenuButton
				text={'Register'}
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

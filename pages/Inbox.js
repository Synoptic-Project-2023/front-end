
import * as React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from './modal/ui/MenuButton';

export default function Profile({ navigation, route }) {

	const { currentUser, logOut, banks, API_BASE } = route.params;

	return (

		<View style={styles.view}>

			<Text
				style={styles.title}
			>
				Hello, {currentUser.username}{'\n'}
			</Text>

			<MenuButton
				text={'Request Volunteer Access'}
				onPress={() => navigation.navigate('Request', { banks, currentUser, API_BASE })}
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

	pressable: {

		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		backgroundColor: '#1a73e8',
	},

	buttonText: {

		fontSize: 20,
		color: 'white',
	},

	title: {

		fontSize: 48,
	},
})

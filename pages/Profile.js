
import * as React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import MenuButton from './modal/ui/MenuButton';
import { useTranslation } from 'react-i18next';

export default function Profile({ navigation, route }) {
	const { t } = useTranslation();
	const { currentUser, logOut, banks, API_BASE } = route.params;
	
	function handleLogOut(){
		logOut();
		navigation.navigate('Map')
	}
	return (

		<View style={styles.view}>

			<Text
				style={styles.title}
			>
				{t('hello')}, {currentUser.username}{'\n'}
			</Text>

			<MenuButton
				text={t('request volunteer access')}
				onPress={() => navigation.navigate('Request', { banks, currentUser, API_BASE })}
			/>

			<MenuButton
				text={t('log out')}
				onPress={() => handleLogOut()}
			/>

		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		flex: 1,
		left: "10%",
		paddingTop: "10%",
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


import * as React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

function Button(props) {

	return (
		<View>
			<Pressable

				style={({ pressed }) =>
					[
						styles.pressable,

						pressed ? { backgroundColor: '#4285f4' } : { backgroundColor: '#1a73e8' },
					]}
				onPress={props.onPress}

			>
				<Text style={styles.buttonText}>
					{props.text}
				</Text>
			</Pressable>
		</View>
	)
}

export default function Profile({ navigation }, props) {

	function logOut() {

		// TODO
	}

	return (

		<View style={styles.view}>

			<Text
				style={styles.title}
			>
				Hello,{'\n'}Placeholder{'\n'}
			</Text>

			<Button
				text={'Request Volunteer Access'}
				onPress={() => navigation.navigate('Request')}
			/>

			<Button
				text={'Log Out'}
				onPress={logOut}
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

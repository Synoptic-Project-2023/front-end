
import * as React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

export default function Profile({ navigation }, props) {

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
			/>


			<Text
				style={styles.label}
			>
				Password
			</Text>

			<TextInput
				style={styles.input}
				placeholder="password"
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

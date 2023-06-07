
import * as React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Banks from '../api/Banks';

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
				<Text style={styles.pressableText}>
					{props.text}
				</Text>
			</Pressable>
		</View>
	)
}

export default function Request({ navigation }, props) {

	function getBankNames(banks) {

		var names = [];

		for (var i = 0; i < banks.length; i++) {

			names.push(banks[i].name);
		}

		return names;
	}

	return (

		<View style={styles.view}>

			<Text
				style={styles.label}
			>
				Select Bank:
			</Text>

			<SelectDropdown
				buttonStyle={styles.dropdown}
				buttonTextStyle={styles.buttonText}
				data={getBankNames(Banks)}
			/>

			<Button
				text={'Request Access'}
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
		marginTop: 10,
		backgroundColor: '#1a73e8',
	},

	pressableText: {

		fontSize: 20,
		color: 'white',
	},

	dropdown: {

		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 10,
		borderWidth: 2,
		width: "100%",
	},
	
	label: {

		fontSize: 32,
	},
})

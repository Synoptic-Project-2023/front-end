
import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Circle from './Circle';

export default function ListButton(props) {

	return (

		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				props.style,
				!pressed ? { backgroundColor: props.color } : { backgroundColor: props.downColor },
				{ borderRadius: props.borderRadius }
			]}
			onPress={props.onPress}
		>
			{props.children}
		</Pressable>
	)
}

const styles = StyleSheet.create({

	pressable: {

		flex: 1,

		borderWidth: 2,
		borderColor: "grey",

		marginBottom: 10,
	},

	pressableUp: {
		
		backgroundColor: 'white',
	},

	pressableDowm: {

		backgroundColor: 'rgb(210, 230, 255)',
	},
})

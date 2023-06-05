
import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Circle from './Circle';

/// Props include:
/// - color
/// - downColor
/// - borderColor
/// - borderRadius
/// - onPress
export default function ListButton(props) {

	const borderColor = props.borderColor == undefined ? 'grey' : props.borderColor;

	return (

		<Pressable
			style={({ pressed }) => [
				styles.pressable,
				props.style,
				!pressed ? { backgroundColor: props.color } : { backgroundColor: props.downColor },
				{
					borderRadius: props.borderRadius,
					borderColor: borderColor,
				}
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

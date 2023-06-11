
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Circle(props) {

	if (props.radius > 0)
		return (

			<View
				style={[{

					width: props.radius,
					height: props.radius,
					borderRadius: props.radius,
					backgroundColor: 'blue',
				},
					props.style
				]}
			/>
		)
	else {

		const borderRadius = width > height ? width : height;

		return (

			<View
				style={[{

					width: props.width,
					height: props.height,
					borderRadius: { borderRadius },
					backgroundColor: 'blue',
				},
					props.style
				]}
			>
			</View>
		)
	}
}

// <Text style={styles.name}>{Filters[props.index]}</Text>

const styles = StyleSheet.create({

	view: {

		flex: 1,
		flexDirection: 'row',

		borderRadius: 20,
		backgroundColor: 'pink',
		alignSelf: 'flex-start',

		padding: 2,
	},

	circle: {

		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: 'blue',
	},
})


import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Filters from '../../api/Filters';

export default function Filter(props) {

	return (

		<View style={styles.view}>
			<View style={styles.circle}></View>
			<Text style={styles.name}>{Filters[props.index]}</Text>
		</View>
	)
}

// <Text style={styles.name}>{Filters[props.index]}</Text>

const styles = StyleSheet.create({

	view: {

		flex: 1,
		flexDirection: 'row',

		borderRadius: 100,
		backgroundColor: 'pink',
		alignSelf: 'flex-start',

		padding: 2,
	},

	circle: {

		width: 20,
		height: 20,
		borderRadius: 100,
		backgroundColor: 'blue',
	},

	name: {

		marginLeft: 8,
		fontSize: 16,
	},
})


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

	name: {

		marginLeft: 8,
		fontSize: 16,
	},

	view: {

		flex: 1,
		flexDirection: 'row',

		borderRadius: 100,
		backgroundColor: 'pink',
	},

	circle: {

		width: 16,
		height: 16,
		borderRadius: 100,
		backgroundColor: 'blue',
	}
})

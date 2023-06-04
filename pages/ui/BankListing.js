
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Circle from './Circle';

export default function BankListing(props) {

	function getFilters(filters) {

		var components = [];

		for (let i = 0; i < filters.length; i++) {

			if (filters[i]) components.push(
				<Circle radius={20} style={styles.circle} />
			);
		}

		return components;
	}

	return (

		<View
			style={styles.view}
		>
			<Text style={styles.name}>{props.bank.name}</Text>

			<View style={styles.circleView}>
				{getFilters(props.bank.filters)}
				<Text style={styles.away}>{props.bank.name}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		flex: 1,

		borderRadius: 20,
		borderWidth: 2,
		borderColor: "grey",

		alignSelf: 'flex-start',

		padding: 5,
		marginBottom: 10,
		width: "100%",
	},

	circleView: {

		flexDirection: 'row',
		padding: 5,
		flex: 1,
	},

	circle: {

		marginRight: 5,
	},

	name: {

		marginLeft: 8,
		fontSize: 32,
	},

	away: {

		fontSize: 20,
		color: 'grey',
		textAlign: 'right',
	}
})

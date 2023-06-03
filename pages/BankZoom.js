
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Filter from './ui/Filter';

export default function BankZoom(props) {

	function getFilters(filters) {

		var components = [];

		for (let i = 0; i < filters.length; i++) {

			if (filters[i]) components.push(<Filter index={i} />);
		}

		return components;
	}

	return (

		<View
			style={[props.style, styles.view]}
		>
			<Text style={styles.bankName}>{props.bank.name}</Text>

			<View style={styles.scrollViewView}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
				>
					{ getFilters(props.bank.filters) }
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		top: "30%"
	},

	bankName: {

		textAlign: 'center',
		marginTop: 24,
		marginLeft: 24,
		marginRight: 24,
		fontSize: 32,
	},

	scrollViewView: {

		flex: 1,
		borderRadius: 10,
		backgroundColor: '#f0f0f0',

		marginLeft: "5%",
		marginRight: "5%",
		marginBottom: "100%",
		marginTop: "10%",
	},

	scrollView: {

		padding: 5,
	},
})

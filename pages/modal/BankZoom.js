
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Filter from './ui/Filter';

export default function BankZoom(props) {

	function getFilters(filters) {

		var components = [];

		for (let i = 0; i < filters.length; i++) {

			if (filters[i]) {

				components.push(

					<Filter
						key={i}
						index={i}
						gotoFilteredList={props.gotoFilteredList}
						filters={props.filters}
					/>
				);
			}
		}

		return components;
	}

	return (

		<View
			style={[props.style, styles.view]}
		>
			<Text style={styles.bankName}>{props.bank.name}</Text>
			<Text style={styles.date}>Last updated: {props.bank.lastUpdated.toDateString()}</Text>

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

	date: {

		textAlign: 'center',
		fontSize: 12,
		color: 'grey',
	},

	scrollViewView: {

        flex: 1,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        ...StyleSheet.absoluteFillObject,
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: 150,
        marginTop: 100,
        bottom: "25%",
	},

	scrollView: {
		flexWrap: 'wrap',
		gap: 5,
		flexDirection: 'row',
		padding: 5,
	},
})

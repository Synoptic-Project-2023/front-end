
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Filter from './ui/Filter';

export default function BankZoom(props) {
	const updatedAtDate = new Date(props.bank.updatedAt).toDateString();

	function getFilters(filters) {

		var components = [];
		/**
			@todo: fix this
		**/
		console.log(filters);
		if(filters){
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
		}
		return components;
	}

	return (

		<View
			style={[props.style, styles.view]}
		>
			<Text style={styles.bankName}>{props.bank.bankName}</Text>
			<Text style={styles.date}>Last updated: {updatedAtDate}</Text>

			<View style={styles.scrollViewView}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
				>
					{ getFilters([props.bank.kosher, props.bank.halal, props.bank.vegan, props.bank.vegetarian]) }
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
        marginTop: 110,
        bottom: "25%",
	},

	scrollView: {
		flexWrap: 'wrap',
		gap: 5,
		flexDirection: 'row',
		padding: 5,
	},
})

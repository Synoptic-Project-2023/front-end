
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Circle from './Circle';
import ListButton from './ListButton';

export default function BankListing(props) {

	function getFilters(filters) {

		var components = [];
		if(filters){
			for (let i = 0; i < filters.length; i++) {

				if (filters[i]) components.push(
					<Circle radius={16} style={styles.circle} key = {i+'circle'} />
				);
			}
		}
		return components;
	}

	return (

		<ListButton
			onPress={() => props.focusBank(props.bank)}
			borderRadius={20}
			color='white'
			downColor='rgb(210, 230, 255)'
			style={styles.listButton}
		>
			<Text style={styles.name}>{props.bank.bankName}</Text>

			<View style={styles.circleView}>
				{getFilters([props.bank.kosher, props.bank.halal, props.bank.vegan, props.bank.vegetarian])}
				<Text style={styles.away}>0.0m</Text>
			</View>
		</ListButton>
	)
}

const styles = StyleSheet.create({

	listButton: {

		flex: 1,

		borderRadius: 20,
		borderWidth: 2,
		borderColor: "grey",

		alignSelf: 'flex-start',

		padding: 5,
		marginBottom: 10,
		width: "100%",
	},

	pressableUp: {


		backgroundColor: 'white',
	},

	pressableDowm: {

		backgroundColor: 'rgb(210, 230, 255)',
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
		fontSize: 28,
	},

	away: {

		fontSize: 16,
		color: 'grey',
		flex: 1,
		width: "100%",
		textAlign: 'right',
	}
})

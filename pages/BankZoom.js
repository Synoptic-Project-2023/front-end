
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Filter from './ui/Filter';

function getLeftDetails(bank) {


}

export default function BankZoom(props) {

	return (

		<View
			style={[props.style, styles.view]}
		>
			<Text style={styles.bankName}>{props.bank.name}</Text>

			<View style={styles.scrollViewView}>
				<ScrollView
					horizontal
					style={{ flex: 1 }}
					contentContainerStyle={{
						flexDirection: 'row',
						flexWrap: 'wrap',
					}}
				>
					<Filter index={0} />
					<Filter index={1} />
					<Filter index={2} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
					<Filter index={3} />
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

		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start' // if you want to fill rows left to right
	},
})

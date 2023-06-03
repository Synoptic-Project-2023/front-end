
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BankZoom(props) {

	return (

		<View
			style={[props.style, styles.view]}
		>
			<Text style={styles.bankName}>{props.bank.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		top: "30%"
	},

	bankName: {

		textAlign: 'center',
		textAlign: 'center',
		marginTop: 24,
		marginLeft: 24,
		marginRight: 24,
		fontSize: 32,
	},
})

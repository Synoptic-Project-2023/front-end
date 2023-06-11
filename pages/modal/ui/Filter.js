
import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import FilterColours from '../../../api/FilterColours';
import ListButton from './ListButton';

export default function Filter(props) {

	var customOnPress = props.gotoFilteredList == undefined;

	function getOnPress(customOnPress) {

		if (customOnPress)

			return props.onPress;
		else
			return () => props.gotoFilteredList(props.index);
	}

	return (

		<ListButton
			style={styles.listButton}
			borderRadius={20}
			color='white'
			downColor='rgb(210, 230, 255)'
			onPress={getOnPress(customOnPress)}
		>
			<View style={[styles.circle, {

				backgroundColor: props.colours == undefined
					? FilterColours[props.index]
					: props.colours[props.index]
			}]}>
			</View>
			<Text style={styles.name}>{props.filters[props.index]}</Text>
		</ListButton>
	)
}

// <Text style={styles.name}>{Filters[props.index]}</Text>

const styles = StyleSheet.create({

	listButton: {

		flex: 1,
		flexDirection: 'row',

		borderRadius: 100,
		backgroundColor: 'pink',
		alignSelf: 'flex-start',
		minWidth: 100,
		padding: 5,
	},

	circle: {

		width: 24,
		height: 24,
		borderRadius: 100,
	},

	name: {

		marginLeft: 8,
		marginRight: 8,
		fontSize: 20,
	},
})

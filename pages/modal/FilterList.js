
import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Filter from './ui/Filter';
import { useTranslation } from 'react-i18next';

export default function FilterList(props) {
	const { t } = useTranslation();

	function getFilters(filters) {

		var components = [];

		for (let i = 0; i < filters.length; i++) {

			if (filters[i]) {

				components.push(

					<Filter
						key={i}
						index={i}
						gotoFilteredList={props.gotoFilteredList}
						filters={filters}
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
			<Text style={styles.bankName}>{t("filters")}</Text>
			<View style={styles.scrollViewView}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
				>
					{getFilters(props.filters)}
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({

	view: {

		top: "60%"
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
        marginBottom: 140,
        marginTop: 90,
        bottom: "55%",
	},

	scrollView: {
		flexWrap: 'wrap',
		gap: 5,
		flexDirection: 'row',
		padding: 5,
	},
})


import { useState } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Banks from '../api/Banks';
import Filters from '../api/Filters';
import Filter from './modal/ui/Filter';
import MenuButton from './modal/ui/MenuButton';

export default function UpdateBank({ navigation }, props) {

	const [selectedBankIndex, setSelectedBankIndex] = useState(-1);

	const [selected, setSelected] = useState(false);
	const [requested, setRequested] = useState(false);

	const [remainingFilters, setRemainingFilters] = useState(

		[0,1,2,3]
	)
	const [selectedFilters, setSelectedFilters] = useState([]);

	function initialiseRemainingFilters(filters) {

		var list = [];

		for (var i = 0; i < filters.length; i++) {

			list.push(i);
		}

		return list;
	}

	function getBankNames(banks) {

		var names = [];

		for (var i = 0; i < banks.length; i++) {

			names.push(banks[i].name);
		}

		return names;
	}

	function getFilterButtons(filters, filterDictionary, onPress) {

		let components = [];

		for (let i = 0; i < filters.length; i++) {

			components.push(

				<Filter
					key={filters[i]}
					index={filters[i]}
					filters={filterDictionary}
					onPress={() => onPress(filters[i])}
				/>
			);
		}

		return components;
	}

	function getMessage(banks) {

		if (requested) {

			return (
				<View>
					<Text style={styles.message}>
						A request has been sent to us for '{banks[selectedBankIndex].name}' and you will get an email
						if you have been approved!
					</Text>
				</View>
			)
		}
	}

	function enableFilter(index) {

		let listIndex = remainingFilters.indexOf(index);

		remainingFilters.splice(listIndex, 1);
		setRemainingFilters(remainingFilters);

		selectedFilters.push(index);
		setSelectedFilters(selectedFilters);
	}

	function disableFilter(index) {

		let listIndex = remainingFilters.indexOf(index);

		remainingFilters.push(index);
		setRemainingFilters(remainingFilters);

		selectedFilters.splice(listIndex, 1);
		setSelectedFilters(selectedFilters);
	}

	return (

		<View style={styles.view}>

			<Text
				style={styles.label}
			>
				Select Bank:
			</Text>

			<SelectDropdown
				buttonStyle={styles.dropdown}
				buttonTextStyle={styles.buttonText}
				search={true}
				data={getBankNames(Banks)}

				onSelect={(selectedItem, index) => {

					setSelected(true);
					setSelectedBankIndex(index);
				}}
			/>


			<Text style={styles.label}>Available Filters:</Text>

			<View style={styles.scrollViewView}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
				>
					{getFilterButtons(remainingFilters, Filters, enableFilter)}
				</ScrollView>
			</View>


			<Text style={styles.label}>Selected:</Text>

			<View style={styles.scrollViewViewSelected}>
				<ScrollView
					contentContainerStyle={styles.scrollViewSelected}
					horizontal
				>
					{getFilterButtons(selectedFilters, Filters, disableFilter)}
				</ScrollView>
			</View>


			<MenuButton
				text={'Update'}
				onPress={() => sendRequest(selectedBankIndex)}
			/>

			{getMessage(Banks)}
		</View>
	)
}

//{ getMessage(Banks[selectedBank]) }

const styles = StyleSheet.create({

	view: {

		flex: 1,
		left: "10%",
		top: "5%",
		width: "80%",
		height: "85%",
	},

	dropdown: {

		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		marginTop: 10,
		borderRadius: 10,
		borderWidth: 2,
		width: "100%",
	},

	label: {

		fontSize: 32,
	},

	message: {

		fontSize: 16,
		color: '#1a73e8'
	},

	scrollViewView: {

		borderRadius: 10,
		backgroundColor: 'white',
		height: "30%",
		marginTop: "2%",
	},

	scrollView: {

		flexWrap: 'wrap',
		gap: 5,
		flexDirection: 'row',
		padding: 5,
	},

	scrollViewViewSelected: {

		borderRadius: 10,
		backgroundColor: 'white',
		height: "10%",
		marginTop: "2%",
	},

	scrollViewSelected: {

		flexWrap: 'wrap',
		gap: 5,
		flexDirection: 'row',
		padding: 5,
	},
})

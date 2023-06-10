
import { useState, useEffect } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Banks from '../api/Banks';
import Filters from '../api/Filters';
import Filter from './modal/ui/Filter';
import MenuButton from './modal/ui/MenuButton';

const API_BASE = 'http://localhost:3001/api'

export default function UpdateBank({ route }) {

    const [selectedBankIndex, setSelectedBankIndex] = useState(-1);
    const [selected, setSelected] = useState(false);
    const [requested, setRequested] = useState(false);
    const [remainingFilters, setRemainingFilters] = useState([0, 1, 2, 3]);
    const [selectedFilters, setSelectedFilters] = useState([]);
	const [userBanks, setUserBanks] = useState([])

    const { banks, userId } = route.params;

    useEffect(() => {
        fetchBanks();
    }, []);

	async function fetchBanks() {
		try {
			const response = await fetch(API_BASE + `/user/${userId}/foodbanks`);
			const data = await response.json();
			setUserBanks(data);
			setRemainingFilters(initialiseRemainingFilters(Filters.length));
		} catch (error) {
			console.log(error);
		}
	}

    function initialiseRemainingFilters(filterCount) {
        return Array.from({ length: filterCount }, (_, index) => index);
    }

    function getBankNames() {
        return userBanks.map((bank) => bank.bankName);
    }

	function getFilterButtons(filters, filterDictionary, onPress) {

		return filters.map((filterIndex, index) => {
			const key = `filter_${filterIndex}_${index}`;
			return (
				<Filter
					key={key}
					index={filterIndex}
					filters={filterDictionary}
					onPress={() => onPress(filterIndex)}
				/>
			);
		});
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

	function getSelectedBankFilters() {
		const selectedBank = userBanks[selectedBankIndex];
		if (selectedBank) {
			return getFilterButtons(selectedFilters, Filters, disableFilter);
		}
		return null;
	}

	function enableFilter(index) {

		const listIndex = remainingFilters.indexOf(index);
		const updatedRemainingFilters = [...remainingFilters];
		updatedRemainingFilters.splice(listIndex, 1);
		
		const updatedSelectedFilters = [...selectedFilters, index];

		setRemainingFilters(updatedRemainingFilters);
		setSelectedFilters(updatedSelectedFilters);

	}

	function disableFilter(index) {
		const listIndex = selectedFilters.indexOf(index);
		const updatedSelectedFilters = [...selectedFilters];
		updatedSelectedFilters.splice(listIndex, 1);
		
		const updatedRemainingFilters = [...remainingFilters, index];
		
		setRemainingFilters(updatedRemainingFilters);
		setSelectedFilters(updatedSelectedFilters);
	}
	function sendRequest(index) {
		const selectedBank = userBanks[index];
		const selectedBankFilters = selectedFilters.map(
			(filterIndex) => remainingFilters[filterIndex]
		);
		console.log(selectedBankFilters);
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
				data={getBankNames(banks)}

				onSelect={(selectedItem, index) => {

					setSelected(true);
					setSelectedBankIndex(index);
					const selectedBank = userBanks[index]
					if(selectedBank) {
						const bankFilters = [
							selectedBank.kosher,
							selectedBank.halal,
							selectedBank.vegan,
							selectedBank.vegetarian,
						];
						setSelectedFilters(
							bankFilters.map((value, index) => (value ? index : -1)).filter((index) => index !== -1)
						);
							setRemainingFilters(
							bankFilters.map((value, index) => (value ? -1 : index)).filter((index) => index !== -1)
						);
					}
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
		top: "10%",
		width: "80%",
		height: "80%",
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

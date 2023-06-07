
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Banks from '../api/Banks';
import MenuButton from './modal/ui/MenuButton';

export default function Request({ navigation }, props) {

	const [selectedBankIndex, setSelectedBankIndex] = useState(-1);
	const [selected, setSelected] = useState(false);
	const [requested, setRequested] = useState(false);

	function getBankNames(banks) {

		var names = [];

		for (var i = 0; i < banks.length; i++) {

			names.push(banks[i].name);
		}

		return names;
	}

	function prepareRequest(index) {

		setSelectedBankIndex(index);
		setSelected(true);
	}

	function sendRequest(index) {

		console.log("hello");

		setRequested(true);
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

					prepareRequest(index);
				}}
			/>

			<MenuButton
				text={'Request Access'}
				onPress={() => sendRequest(selectedBankIndex)}
				enabled={selected}
			/>

			{ getMessage(Banks) }
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

	pressable: {

		borderRadius: 10,
		padding: 10,
		marginBottom: 10,
		marginTop: 10,
		backgroundColor: '#1a73e8',
	},

	pressableText: {

		fontSize: 20,
		color: 'white',
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
})

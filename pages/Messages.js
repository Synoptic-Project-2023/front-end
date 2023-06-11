
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Banks from '../api/Banks';
import MenuButton from './modal/ui/MenuButton';

export default function Messages({ navigation }, props) {

	const [messageList, setMessageList] = useState([]);
	const [selectedMessageIndex, setselectedMessageIndex] = useState(-1);
	const [selected, setSelected] = useState(false);
	const [accept, setAccept] = useState(false);
	const [decline, setDecline] = useState(false);

	function handleMessages() {

		setMessageList([
			{
				"_id": "64850c81b76ebf3e933df752",
				"title": "yuck",
				"description": "suck",
				"senderId": "647e4f57c4c3e2d33179df25",
				"recieverId": "647e4f57c4c3e2d33179df25",
				"toLevel": "luck",
				"creationDate": "2023-06-10T23:51:26.527Z",
				"__v": 0
			},
			{
				"_id": "648513fc77f90c98d5890ed8",
				"title": "Elevate privilidges request",
				"description": "for Glasgow South West Foodbank",
				"senderId": "647e4f57c4c3e2d33179df25",
				"recieverId": "6483bcca47bb9094aca0d017",
				"toLevel": "volunteer",
				"creationDate": "2023-06-11T00:21:13.989Z",
				"__v": 0
			},
			{
				"_id": "648515f077f90c98d5890ee6",
				"title": "Elevate privilidges request",
				"description": "for Edinburgh Central Foodbank",
				"senderId": "647e4f57c4c3e2d33179df25",
				"recieverId": "6483bcdc47bb9094aca0d019",
				"toLevel": "volunteer",
				"creationDate": "2023-06-11T00:21:13.989Z",
				"__v": 0
			}
		])
	}

	if (messageList.length <= 0) handleMessages();

	function getMessageTitles(messages) {

		var titles = [];

		for (var i = 0; i < messages.length; i++) {

			titles.push(messages[i].title);
		}

		return titles;
	}

	function prepareMessage(index) {

		setAccept(false);
		setDecline(false);
		setselectedMessageIndex(index);
		setSelected(true);
	}

	function setResult(accepted) {

		if (accepted) {

			setAccept(true);
		}
		else {

			setDecline(true);
		}

		setSelected(false);
	}

	function getDescription(messageList, selectedMessageIndex, enabled) {

		let message = messageList[selectedMessageIndex];

		if (enabled) {

			console.log(selectedMessageIndex);

			return (

				<View>
					<Text style={styles.label}>Message:</Text>
					<Text style={styles.description}>{message.description}{'\n'}</Text>

					<Text style={styles.label}>From:</Text>
					<Text style={styles.description}>Placeholder Name</Text>
					<Text style={styles.date}>Email: Placeholder Email</Text>
					<Text style={styles.date}>ID: {message.senderId}{'\n'}</Text>

					<Text style={styles.label}>Sent:</Text>
					<Text style={styles.description}>{message.creationDate}{'\n'}</Text>

					<MenuButton
						text={'Elevate to ' + message.toLevel}
						onPress={() => setResult(true)}
						enabled={selected}
					/>

					<MenuButton
						text={'Decline'}
						onPress={() => setResult(false)}
						enabled={selected}
						bad={true}
					/>
				</View>
			)
		}
	}

	function getResultMessage(messageList, selectedMessageIndex, accept, decline) {

		if (accept) {

			return (
				<View>
					<Text style={styles.message}>
						The message has been approved!
					</Text>
				</View>
			)
		}
		else if (decline) {

			return (
				<View>
					<Text style={[styles.message, {color: '#f45269'}]}>
						The message has been declined.
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
				Select Message:
			</Text>

			<SelectDropdown
				buttonStyle={styles.dropdown}
				buttonTextStyle={styles.buttonText}
				search={true}
				data={getMessageTitles(messageList)}

				onSelect={(selectedItem, index) => {

					prepareMessage(index);
				}}
			/>

			{getDescription(messageList, selectedMessageIndex, selected)}

			{getResultMessage(messageList, selectedMessageIndex, accept, decline)}
		</View>
	)
}

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

	description: {

		fontSize: 20,
		color: 'black',
	},

	message: {

		fontSize: 16,
		color: '#1a73e8'
	},

	date: {

		fontSize: 12,
		color: 'grey',
	},
})

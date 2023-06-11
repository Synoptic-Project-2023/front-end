
import { useState, useEffect } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Banks from '../api/Banks';
import MenuButton from './modal/ui/MenuButton';

export default function Messages({ navigation, route }, props) {

	const [messageList, setMessageList] = useState([]);
	const [selectedMessageIndex, setselectedMessageIndex] = useState(-1);
	const [selected, setSelected] = useState(false);
	const [accept, setAccept] = useState(false);
	const [decline, setDecline] = useState(false);
	const [messageUser, setMessageUser] = useState([]);

	const {API_BASE} = route.params;

	useEffect(() => {
		handleMessages();
	}, []);

	async function handleMessages() {
		const response = await fetch(API_BASE + '/messages')
		const data = await response.json()
		setMessageList(data)
	}

	function getMessageTitles(messages) {
		return messages.map((message) => (message.title + ' ' + message.description));
	}

	async function fetchSelectedMessageIndex(index){
		setselectedMessageIndex(index);
		
		const response = await fetch(API_BASE + '/user/' + messageList[index].senderId)
		const data = await response.json()
		setMessageUser(data)

	}

	function prepareMessage(index) {

		setAccept(false);
		setDecline(false);
		fetchSelectedMessageIndex(index);
		setSelected(true);
	}

	async function deleteMessage(){
		await fetch(API_BASE + "/user/message/" + messageList[selectedMessageIndex]._id, {
			method: 'DELETE'
			}).then((response) => {
				if(response.ok){
					console.log("deleted message")
				} else {
					console.log("error deleting")
				}
			})
		handleMessages();
	}

	async function setResult(accepted) {
		var index = selectedMessageIndex;
		if (accepted) {
			const userPrivs = {
				"access" : messageList[index].toLevel,
				"banks" : messageList[index].recieverId
			}
			fetch(API_BASE + "/user/" + messageList[index].senderId + "/update", {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userPrivs)
			}).then((response) => {
				if(response.ok){
					console.log("updated")
				} else {
					console.log("error updating")
				}
			}).catch((e) => {
				console.log("Network error", e)
			})
			setAccept(true);
		}
		else {
			setDecline(true);
		}
		await deleteMessage();
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
					<Text style={styles.description}>{messageUser.username}</Text>
					<Text style={styles.date}>{messageUser.email}</Text>
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

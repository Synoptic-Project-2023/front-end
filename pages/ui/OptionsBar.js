
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListButton from './ListButton';

/// Props:
/// - texts (array of options by name)
/// - fontSize
/// - margin

export default function OptionsBar(props) {

	function getListButtons(texts, functions) {

		var components = [];

		for (var i = 0; i < texts.length; i++) {

			components.push(
				<ListButton
					key={i + 'b'}
					borderRadius={20}
					color='white'
					downColor='grey'
					style={{
						margin: props.margin,
					}}
					onPress={functions[i]}
				>
					<Text
						style={{
							fontSize: props.fontSize,
							textAlign: 'center',
						}}
					>
						{texts[i]}
					</Text>
				</ListButton>
			);
		}

		return components;
	}

	return (

		<View style={[{
				flexDirection: 'row',
			},
			props.style
		]}
		>
			{ getListButtons(props.texts, props.functions) }
		</View>
	)
}

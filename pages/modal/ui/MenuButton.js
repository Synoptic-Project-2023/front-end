
import { useState } from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';

export default function MenuButton(props) {

	if (props.enabled || props.enabled == undefined) {

		return (
			<View>
				<Pressable

					style={({ pressed }) =>
						[
							{
								borderRadius: 10,
								padding: 10,
								marginBottom: 10,
								marginTop: 10,
								backgroundColor: '#1a73e8',
							},

							pressed ? { backgroundColor: '#4285f4' } : { backgroundColor: '#1a73e8' },
						]}
					onPress={props.onPress}
				>
					<Text style={{

						fontSize: 20,
						color: 'white'
					}}>
						{props.text}
					</Text>
				</Pressable>
			</View>
		)
	}
}
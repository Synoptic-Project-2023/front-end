
import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ListButton from './ListButton';

/// Props include:
/// - text
/// - 
export default function BurgerButton(props) {

	return (

        <View
            // Hamburger Button //
            style={{
                zIndex: 1,
                position: 'absolute',
                flex: 1,
                top: '5%',
                right: '5%',
            }}
        >
            <ListButton
                onPress={() => setDisplayModal(false)}
                style={styles.exitButton}
                borderRadius={100}
                borderColor='#9bbff4'
                color='#4a80f5'
                downColor='#9bbff4'
            >
                <Text style={styles.burgerText}> {props.text} </Text>
            </ListButton>
        </View>
	)
}

const styles = StyleSheet.create({

	pressable: {


	},
})

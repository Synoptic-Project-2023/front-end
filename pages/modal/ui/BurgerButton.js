
import * as React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ListButton from './ListButton';

/// Props include:
/// - text
/// - index
export default function BurgerButton(props) {

    const depth = 5 + props.index * 7 + (props.index == 0 ? 0 : 2.5);
    const right = props.index == 0 ? 5 : 6;

	return (

        <View
            // Hamburger Button //
            style={[ styles.view, {
                top: depth + '%',
                right: right + '%',
            }]}
        >
            <ListButton
                style={styles.listButton}
                borderRadius={100}
                borderColor='#9bbff4'
                downColor='#9bbff4'
                color={props.index == 0 ? '#4a80f5' : 'white'}
            >
                <Text style={[

                    styles.text,
                    {
                        fontSize: props.index == 0 ? 28 : 14,
                    }
                ]}>
                    {" " + props.text + " "}
                </Text>
            </ListButton>
        </View>
	)
}

const styles = StyleSheet.create({

    view: {

        zIndex: 1,
        position: 'absolute',
        flex: 1,
    },

    text: {

        textAlign: 'center',
        color: 'white',
        margin: 10,
        padding: 4,
    }
})

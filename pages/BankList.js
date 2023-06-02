
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function BankList() {

    return (
        <View style={[styles.searchView, styles.modalView]}>
            <Pressable
                title="hi"
                onPress={() => toggleDisplayModal()}
                style={styles.exitButton}
            >
                <Text>Funny Monkey</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    modalView: {

        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,

        marginTop: 20,

        // shadow //
        shadowColor: '#0',
        shadowOffset: {
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 20,
    },

    searchView: {

        //top: "10%",
    },
});

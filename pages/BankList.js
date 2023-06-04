
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View, ScrollView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import BankListing from './ui/BankListing';

export default function BankList(props) {

    function getBankListings(banks) {

        var components = [];

        for (let i = 0; i < banks.length; i++) {

            if (banks[i]) components.push(<BankListing bank={banks[i]} />);
        }

        return components;
    }

    return (

        <View
            style={[props.style, styles.view]}
        >
            <View style={styles.scrollViewView}>
                <ScrollView style={styles.scrollView}>
                    {getBankListings(props.banks)}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    view: {

        top: "5%",
    },

    scrollViewView: {

        flex: 1,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',

        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "100%",
        marginTop: "5%",
    },

    scrollView: {

        padding: 10,
    },
});

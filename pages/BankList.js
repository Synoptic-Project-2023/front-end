
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View, ScrollView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import BankListing from './ui/BankListing';
import OptionsBar from './ui/OptionsBar';

export default function BankList(props) {

    function getBankListings(banks) {

        var components = [];

        for (let i = 0; i < banks.length; i++) {

            if (banks[i]) components.push(
                <BankListing bank={banks[i]}
                    focusBank={props.focusBank}
                />);
        }

        return components;
    }

    return (

        <View
            style={[props.style, styles.view]}
        >
            <View style={styles.scrollViewView}>
                <ScrollView
                    style={styles.scrollView}
                >
                    {getBankListings(props.banks)}
                </ScrollView>
            </View>

            <OptionsBar
                texts={["Filters", "Sort By"]}
                style={styles.optionsBar}
                fontSize={20}
                margin={5}
            />
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
        marginBottom: "40%",
        marginTop: "5%",
    },

    scrollView: {

        padding: 10,
    },

    optionsBar: {

        position: 'absolute',
        bottom: "12%",
        width: "60%",
        left: "20%",
    }
});

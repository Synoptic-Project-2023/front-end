
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View, ScrollView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import BankListing from './ui/BankListing';
import OptionsBar from './ui/OptionsBar';

export default function BankList(props) {

    function getBankListings(banks, filterIndex) {

        var components = [];

        for (let i = 0; i < banks.length; i++) {

            if (filterIndex == undefined || banks[i].filters[filterIndex]) {

                components.push(

                    <BankListing bank={banks[i]}
                        focusBank={props.focusBank}
                        key = {i + 'banklist'}
                    />
                );
            }
        }

        return components;
    }

    function helloWorld() {

        console.log("Hello world!")
    }

    return (

        <View
            style={[props.style, styles.view]}
        >
            <Text
                style={styles.title}
            >
                {"Banks" + (props.filterIndex != undefined ? " with "+ props.filters[props.filterIndex] : "")}
            </Text>
            
            <View style={styles.scrollViewView}>
                <ScrollView
                    style={styles.scrollView}
                >
                    {getBankListings(props.banks, props.filterIndex)}
                </ScrollView>
            </View>

            <OptionsBar
                texts={["Filters", "Sort By"]}
                functions={[helloWorld, props.gotoFilterList]}
                style={styles.optionsBar}
                fontSize={20}
                margin={5}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    view: {

        top: "10%",
    },

    scrollViewView: {

        flex: 1,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',

        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "50%",
        marginTop: "2%",
    },

    scrollView: {

        padding: 10,
    },

    optionsBar: {

        position: 'absolute',
        bottom: "18%",
        width: "60%",
        left: "20%",
    },

    title: {

        fontSize: 32,
        paddingTop: 10,
        textAlign: 'center',
    },
});

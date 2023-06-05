
import React, { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

import Banks from './api/Banks';
import BankList from './pages/BankList';
import BankZoom from './pages/BankZoom';
import BurgerButton from './pages/ui/BurgerButton';
import ListButton from './pages/ui/ListButton';

export default function MapScreen({ navigation }) {

    const mapRef = React.createRef();

    const [displayModal, setDisplayModal] = useState(false);
    const [pageName, setPageName] = useState("bankList");
    const [location, setLocation] = useState(Banks[0].location);
    const [focusedBank, setFocusedBank] = useState(Banks[0]);
    const [banks, setBanksList] = useState(Banks);
    const [filterIndex, setFilterIndex] = useState(undefined);

    function focusBank(bank) {

        setFocusedBank(bank);
        setLocation(bank.location);
        setDisplayModal(true);
        setPageName("bankZoom");

        mapRef.current.animateToRegion(bank.location);
    }

    function getModalPage(pageName) {

        switch (pageName) {

            case "bankZoom":
                return [
                    <BankZoom
                        style={styles.modalView}
                        bank={focusedBank}
                        gotoFilterdList={gotoFilterdList}
                    />];

            case "bankList":
                return [
                    <BankList
                        style={styles.modalView}
                        banks={Banks}
                        focusBank={focusBank}
                        filterIndex={filterIndex}
                    />]
        }
    }

    function enableDisplayModal(pageName) {

        setBanksList(Banks);
        setPageName(pageName);
        setDisplayModal(true);
        setFilterIndex(undefined);
    }

    function getMarkers(banksList) {

        var components = [];

        for (let i = 0; i < banksList.length; i++) {

            if (banksList[i]) components.push(
                <Marker
                    coordinate={banksList[i].location}
                    title={banksList[i].name}
                    onPress={() => focusBank(banksList[i])}
                />
            );
        }

        return components;
    }

    function gotoFilterdList(filterIndex) {

        enableDisplayModal("bankList")
        setFilterIndex(filterIndex);
    }

    return (
        <View style={styles.container}>

            <View
                // Search Button //
                style={{
                zIndex: 1,
                position: 'absolute',
                flex: 1,
                bottom: '2%',
            }}>
                <ListButton
                    onPress={() => enableDisplayModal("bankList")}
                    borderRadius={10}
                    color='white'
                    borderColor='#4a80f5'
                    downColor='#9bbff4'
                >
                    <Text
                        style={{
                            fontSize: 64,
                            textAlign: 'center',
                            color: 'white',
                            padding: 5,
                        }}
                    >
                        🔍
                    </Text>
                </ListButton>
            </View>

            <BurgerButton text="☰" index = "0"/>
            <BurgerButton text="👤" index = "1"/>
            <BurgerButton text="🏦" index = "2"/>

            <Modal
                // Modal //
                animationType="slide"
                transparent={true}
                visible={displayModal}
            >
                {getModalPage(pageName)}

                <View style={styles.exitButtonView}>

                    <ListButton
                        onPress={() => setDisplayModal(false)}
                        style={styles.exitButton}
                        borderRadius={10}
                        borderColor='#9bbff4'
                        color='#4a80f5'
                        downColor='#9bbff4'
                    >
                        <Text
                            style={{
                                fontSize: 32,
                                textAlign: 'center',
                                color: 'white'
                            }}
                        >
                            🔽
                        </Text>
                    </ListButton>
                </View>
            </Modal>

            <MapView
                // Map //
                style={styles.map}
                initialRegion={location}
                ref={mapRef}
                mapPadding={{

                    bottom: 400,
                }}
            >
                {getMarkers(Banks)}
            </MapView>
        </View>
    );
}
//<BankZoom style={styles.modalView} />

const styles = StyleSheet.create({

    container: {
        ...StyleSheet.absoluteFillObject,
        position: "relative",
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-start",
        alignItems: "center",
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },

    modalView: {

        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,

        // shadow //
        shadowColor: '#0',
        shadowOffset: {
            height: -4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 20,
    },

    exitButtonView: {

        zIndex: 2,
        position: 'absolute',
        flex: 1,
        bottom: "0%",
        width: "20%",
        left: "40%",
    },

    searchButtonView: {

        zIndex: 1,
        position: 'absolute',
        flex: 1,
        bottom: '10%',
    },
});

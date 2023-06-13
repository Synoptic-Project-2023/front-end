
import React, { useEffect, useInsertionEffect, useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { MAPSAPI, API_BASE } from '@env'

import Banks from '../api/Banks';
import Filters from '../api/Filters';
import BankList from './modal/BankList';
import BankZoom from './modal/BankZoom';
import FilterList from './modal/FilterList';
import BurgerButton from './modal/ui/BurgerButton';
import ListButton from './modal/ui/ListButton';
import * as Location from 'expo-location';
import BanksDataJSON from '../api/BanksDataJSON.json'

export default function MapScreen({ navigation }) {

    const mapRef = React.createRef();

    const [displayModal, setDisplayModal] = useState(false);
    const [pageName, setPageName] = useState("bankList");
    const [location, setLocation] = useState(Banks[1].location);
    const [focusedBank, setFocusedBank] = useState(Banks[1]);
    const [loggedIn, setLoggedIn] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [banks, setBanksList] = useState(BanksDataJSON);
    const [filterIndex, setFilterIndex] = useState(undefined);

    const [currentLocation, setCurrentLocation] = useState({
        latitude: 1,
        longitude: 1,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });

    var userId = ""
    
    function focusBank(bank) {

        setFocusedBank(bank);
        setLocation(bank.location);
        setDisplayModal(true);
        setPageName("bankZoom");

        mapRef.current.animateToRegion(bank.location);
    }

    async function getLocationAsync() {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log("failed to obatin location")
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
    }

    useEffect(() => {

        getLocationAsync();
        fetchBanksList();
        checkLoggedIn();
        
    }, []);

    async function logIn(newId){
        userId = newId;
        await checkLoggedIn();
    }

    function logOut(){
        userId = ''
        checkLoggedIn();
    }

    async function checkLoggedIn(){
        if(userId){
            try{
                const response = await fetch(API_BASE + '/user/' + userId)
                const data = await response.json()
                setCurrentUser(data)
                if(data){ setLoggedIn('Profile') } else { setLoggedIn('Login'); setCurrentUser([]) }
                console.log(currentUser)
            } catch (e){
                console.log(e)
            }
        } else{
            setLoggedIn('Login')
            setCurrentUser([])
        }
    }

    function getModalPage(pageName) {

        switch (pageName) {

            case "bankZoom":
                return (
                    <BankZoom
                        key={'b'}
                        style={styles.modalView}
                        bank={focusedBank}
                        gotoFilteredList={gotoFilterdList}
                        filters={Filters}
                    />
                );

            case "bankList":
                return (
                    <BankList
                        key={'a'}
                        style={styles.modalView}
                        banks={banks}
                        focusBank={focusBank}
                        filterIndex={filterIndex}
                        gotoFilterList={() => enableDisplayModal("filterList")}
                        filters={Filters}
                        currentLocation={currentLocation}
                    />
                );

            case "filterList":
                return (
                    <FilterList
                        style={styles.modalView}
                        filters={Filters}
                        gotoFilteredList={gotoFilterdList}
                    />
                );
        }
    }

    async function fetchBanksList(){
        try{
            const response = await fetch(API_BASE + '/foodbank')
            if(response.state != 404 ){
                const data = await response.json()
                setBanksList(data)
            }
        } catch (e){
            console.warn("API couldnt be contacted, defaulting to local storage. Some functionality may not work.")
        }
    }

    async function enableDisplayModal(pageName, filterIndex = undefined) {

        fetchBanksList();
        setPageName(pageName);
        setDisplayModal(true);
        setFilterIndex(filterIndex);
    }

    function getMarkers(banksList) {

        var components = [];

        for (let i = 0; i < banksList.length; i++) {

            if (banksList[i]) components.push(
                <Marker
                    key={i + 'a'}
                    coordinate={banksList[i].location}
                    title={banksList[i].name}
                    onPress={() => focusBank(banksList[i])}
                />
            );
        }

        return components;
    }

    function gotoFilterdList(filterIndex) {

        enableDisplayModal("bankList", filterIndex)
    }

    return (
        <View style={styles.container}>

            <View
                // Search Button //
                style={styles.searchButtonView}>
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

            <BurgerButton text="❓" index="0" onPress={() => navigation.navigate('CitizensAdvice')}/>
            <BurgerButton text="👤" index="1" onPress={() => navigation.navigate(loggedIn, { currentUser, logOut, logIn, API_BASE, banks})} />
            {(currentUser.access === 'volunteer' || currentUser.access === 'admin') &&
                <BurgerButton text="🏦" index="2" onPress={() => navigation.navigate('UpdateBank', { banks, currentUser, API_BASE })} />
            }
            {(currentUser.access === 'admin') &&
                <BurgerButton text="✉️" index="3" onPress={() => navigation.navigate('Inbox', { banks, currentUser, API_BASE })} />
            }
            
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
                provider={"google"}
                googleMapsApiKey={MAPSAPI}
                style={styles.map}
                initialRegion={location}
                ref={mapRef}
                showsUserLocation={true}
                mapPadding={{
                    bottom: 400,
                }}
            >
                {getMarkers(banks)}
            </MapView>
        </View>
    );
}
//<BankZoom style={styles.modalView} />

const styles = StyleSheet.create({

    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-start",
        alignItems: "stretch",
    },

    map: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center"
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
        justifyContent: 'center', 
        left: 0,
        right: 0,
        alignItems: 'center',
        flex: 1,
        //TODO: TERRIBLE PLEASE FIX
        bottom: '2%',
        
    },
});

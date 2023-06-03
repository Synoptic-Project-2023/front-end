
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

import Banks from './api/Banks';
import BankList from './pages/BankList';
import BankZoom from './pages/BankZoom';

export default function MapScreen({ navigation }) {

    const [displayModal, setDisplayModal] = useState(false);

    function toggleDisplayModal() {

        setDisplayModal(!displayModal);
    }

    return (
        <View style={styles.container}>

            <View style={{
                zIndex: 1,
                position: 'absolute',
                flex: 1,
                bottom: '5%',
            }}>
                <Button
                    title="Search"
                    onPress={() => toggleDisplayModal()}
                />
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={displayModal}
            >
                <BankZoom style={styles.modalView} bank={Banks[0]} />

                <View style={styles.exitButtonView}>
                    <Button
                        title="exit"
                        onPress={() => toggleDisplayModal()}
                        style={styles.exitButton}
                    />
                </View>
            </Modal>

            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={Banks[0].location}
            >
                <Marker
                    coordinate={Banks[0].location}
                    title="Glasgow South West Foodbank"
                />
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

    exitButtonView: {

        zIndex: 2,
        position: 'absolute',
        flex: 1,
        bottom: "2%",
        width: "20%",
        left: "40%",
    },

    searchButtonView: {

        zIndex: 1,
        position: 'absolute',
        flex: 1,
        bottom: '10%',
    }
});

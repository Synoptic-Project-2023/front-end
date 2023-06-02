
import { useState } from 'react';
import { StyleSheet, Button, Pressable, Modal, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const locations = [


]

const GlasgowSouthWestFoodbank = {
    latitude: 55.84991575627262,
    longitude: - 4.301230319640668,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

const SalvationArmy = {
    latitude: 55.86290739874918,
    longitude: - 4.317755959910329,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
};

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
                <View style={[styles.searchView, styles.modalView]}>
                    <Pressable
                        title="hi"
                        onPress={() => toggleDisplayModal()}
                        style={styles.exitButton}
                    >
                        <Text>Funny Monkey</Text>
                    </Pressable>
                </View>
            </Modal>

            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={GlasgowSouthWestFoodbank}
            >
                <Marker
                    coordinate={GlasgowSouthWestFoodbank}
                    title="Glasgow South West Foodbank"
                />

                <Marker
                    coordinate={SalvationArmy}
                    title="SalvationArmy"
                />

                <Polyline
                    coordinates={[GlasgowSouthWestFoodbank, SalvationArmy]}
                    strokeColor={"#000"}
                    strokeWidth={3}
                    lineDashPattern={[1]}
                />
            </MapView>
        </View>
    );
}

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

    searchView: {

        //top: "10%",
    },

    exitButtonView: {

        zIndex: 2,
        position: 'absolute',
        flex: 1,
    },

    exitButton: {

        position: "absolute",
        width:"40%",
        height:"40%",
        backgroundColor: "cyan",
        borderRadius: 20,
        elevation: 2,
    }
});
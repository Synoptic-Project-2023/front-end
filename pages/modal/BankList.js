
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import FilterColours from '../../api/FilterColours';
import BankListing from './ui/BankListing';
import OptionsBar from './ui/OptionsBar';
import Geolocation from '@react-native-community/geolocation';

export default function BankList(props) {

    function getBankListings(banks, filterIndex, currentLocation) {

        var components = [];

        for (let i = 0; i < banks.length; i++) {

            var currentBankFilters = [banks[i].kosher, banks[i].halal, banks[i].vegan, banks[i].vegetarian]

            if (filterIndex == undefined || currentBankFilters[filterIndex]) {

                components.push(

                    <BankListing
                        bank={banks[i]}
                        focusBank={props.focusBank}
                        key={i + 'banklist'}
                        colours={FilterColours}
                        distance={getDistance(currentLocation, banks[i].location)}
                    />
                );
            }
        }

        return components;
    }

    function getDistance(l1, l2) {

        // function adapted from https://stackoverflow.com/questions/639695/how-to-convert-latitude-or-longitude-to-meters

        var R = 6378.137; // Radius of earth in KM

        var dLat = l2.latitude * Math.PI / 180 - l1.latitude * Math.PI / 180;
        var dLon = l2.longitude * Math.PI / 180 - l1.longitude * Math.PI / 180;

        var a
            = Math.sin(dLat / 2)
            * Math.sin(dLat / 2)
            + Math.cos(l1.latitude * Math.PI / 180)
            * Math.cos(l2.longitude * Math.PI / 180)
            * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        return Math.round(d * 1000 * 10) / 10; // meters
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
                    {getBankListings(props.banks, props.filterIndex, props.currentLocation)}
                </ScrollView>
            </View>

            <OptionsBar
                texts={["Filters", "Sort By"]}
                functions={[props.gotoFilterList, undefined]}
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
        ...StyleSheet.absoluteFillObject,
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: 150,
        marginTop: 75,
        bottom: "10%",
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

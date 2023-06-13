import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

export default function Link({ input, url }) {
    const hanldeClick = () => {
        Linking.openURL(url);
    }

    return (
        <View>
            <TouchableOpacity style = {{borderColor: "#4a80f5", borderWidth: 2, padding: 5, borderRadius: 100}} onPress={hanldeClick}>
                <Text style = {{fontSize: 24}}> 🔗 </Text>
            </TouchableOpacity>
        </View>
    )
}
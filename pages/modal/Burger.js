
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Burger(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Welcome',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <Text>Hello</Text>
    );
};

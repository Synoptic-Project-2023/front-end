
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from './pages/MapScreen';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Map"
                    component={MapScreen}
                    options={{
                        title: 'Map',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
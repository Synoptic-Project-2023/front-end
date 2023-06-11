
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from './pages/MapScreen';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Request from './pages/Request'
import UpdateBank from './pages/UpdateBank';
import Messages from './pages/Messages'
import Register from './pages/Register'

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
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                    }}
                />
                <Stack.Screen
                    name="Request"
                    component={Request}
                    options={{
                        title: 'Request Volunteer Access',
                    }}
                />
                <Stack.Screen
                    name="UpdateBank"
                    component={UpdateBank}
                    options={{
                        title: 'Update Bank Inventory',
                    }}
                />
                <Stack.Screen
                    name="Inbox"
                    component={Messages}
                    options={{
                        title: 'Inbox',
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Register',
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};
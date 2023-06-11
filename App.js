
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = React.lazy(() => import('./pages/MapScreen'));
const Login = React.lazy(() => import('./pages/Login'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Request = React.lazy(() => import('./pages/Request'));
const UpdateBank = React.lazy(() => import('./pages/UpdateBank'));
const Messages = React.lazy(() => import('./pages/Messages'));
const Register = React.lazy(() => import('./pages/Register'));

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
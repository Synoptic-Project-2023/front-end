
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { I18nextProvider } from 'react-i18next';
import i18n from './localisation/translations';

import MapScreen from './pages/MapScreen';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Request from './pages/Request';
import UpdateBank from './pages/UpdateBank';
import Messages from './pages/Messages';
import Register from './pages/Register';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer>
                <Stack.Navigator>

                    <Stack.Screen
                        name="Map"
                        component={MapScreen}
                        options={{
                            title: i18n.t('map'),
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            title: i18n.t('login'),
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: i18n.t('profil'),
                        }}
                    />
                    <Stack.Screen
                        name="Request"
                        component={Request}
                        options={{
                            title: i18n.t('request volunteer access'),
                        }}
                    />
                    <Stack.Screen
                        name="UpdateBank"
                        component={UpdateBank}
                        options={{
                            title: i18n.t('update bank inventory'),
                        }}
                    />
                    <Stack.Screen
                        name="Inbox"
                        component={Messages}
                        options={{
                            title: i18n.t('inbox'),
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            title: i18n.t('register'),
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        </I18nextProvider>
    );
};
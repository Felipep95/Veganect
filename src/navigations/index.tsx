import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import signOn from '../screens/signOn';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="signOn" component={signOn} /> 
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator
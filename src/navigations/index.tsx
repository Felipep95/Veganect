import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import signIn from '../screens/signIn';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="signIn" component={signIn} />   
            
            
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator
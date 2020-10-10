import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import home from '../screens/home';
import signUp from '../screens/signUp';

import Category from '../navigations/drawer-menu';
import SettingsNavigation from '../navigations/settings';
import Settings from '../screens/settings-screen';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="home">
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Category} /> 
            <Stack.Screen name='settings' component={Settings} />
            <Stack.Screen name="teste" component={SettingsNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator
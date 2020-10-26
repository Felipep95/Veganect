import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import signUp from '../screens/signUp';
import Login from '../screens/login';
import home from '../screens/home';

import Category from '../navigations/drawer-menu';
import Sweets from '../screens/category/sweets';
import Salads from '../screens/category/salads';
import Savorys from '../screens/category/savorys';

import recipesDetails from '../screens/recipesDetails';

import tabBar from '../navigations/tabBar';
import Settings from '../screens/settings-screen';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
            <Stack.Screen name="signUp" component={signUp} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Category} /> 

            <Stack.Screen name="doces" component={Sweets} /> 
            <Stack.Screen name="saladas" component={Salads} /> 
            <Stack.Screen name="salgados" component={Savorys} /> 
            
            <Stack.Screen name="recipesDetails" component={recipesDetails} /> 

            <Stack.Screen name='settings' component={Settings} />
            <Stack.Screen name="teste" component={tabBar} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator
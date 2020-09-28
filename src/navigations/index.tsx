import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import home from '../screens/home';
import signOn from '../screens/signOn';

import Category from '../navigations/drawer-menu';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="login">
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Category} /> 
            <Stack.Screen name="signOn" component={signOn} /> 
            {/* <Stack.Screen name="category" component={Category} />  */}
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator
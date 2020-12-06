import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/home';

const Tab = createBottomTabNavigator();

const SettingsNavigation = () => (
    <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{
            labelStyle:{fontSize: 15},
            activeBackgroundColor: '#3CB371',
            inactiveBackgroundColor: '#2E8B57',
            activeTintColor: 'white',
            inactiveTintColor: 'white'
        }}
    >
        <Tab.Screen name='home' component={Home}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon:() => <MaterialIcons name='home' size={30} color='white' />
            }}
        />
    </Tab.Navigator>
)

export default SettingsNavigation
    


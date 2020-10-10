import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Settings from '../screens/settings-screen';
import Salads from '../screens/category/salads';
import Sweets from '../screens/category/sweets';
import Home from '../screens/home';
// import styles from '../globalStyles/styles';
import styles from './styles';

import drawerNavigation from '../navigations/drawer-menu';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


const Tab = createBottomTabNavigator();

const SettingsNavigation = () => (
    <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{
            labelStyle:{fontSize: 15},
            // tabStyle:{backgroundColor: '#3CB371'},
            activeBackgroundColor: 'green',
            inactiveBackgroundColor: '#3CB371',
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
        <Tab.Screen name='settings' component={Settings}
            options={{
                tabBarLabel: 'Configurações',
                tabBarIcon:() => <MaterialIcons name='settings' size={30} color='white' />
            }}
        />
    </Tab.Navigator>
)

export default SettingsNavigation
    


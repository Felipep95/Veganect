import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import login from '../screens/login';
import Home from '../screens/home';
import tabBar from '../screens/settings-screen';
import Salads from '../screens/category/salads';
import Sweets from '../screens/category/sweets';

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
            // #2E8B57
            // tabStyle:{backgroundColor: '#3CB371'},
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
    


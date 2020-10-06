import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Settings from '../screens/settings-screen';
import Salads from '../screens/category/salads';
import Sweets from '../screens/category/sweets';
import Home from '../screens/home';
import styles from '../globalStyles/styles';

import drawerNavigation from '../navigations/drawer-menu';

const Tab = createBottomTabNavigator();

const SettingsNavigation = () => (
    <Tab.Navigator 
        initialRouteName='Home'
        tabBarOptions={{
            labelStyle:{fontSize: 15},
        }}
    >
        
        <Tab.Screen name='home' component={Home}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon:() => <MaterialIcons name='home' size={30} />
            }}
        />
        <Tab.Screen name='settings' component={Settings}
            options={{
                tabBarLabel: 'Configurações',
                tabBarIcon:() => <MaterialIcons name='settings' size={30} />
            }}
        />
        <Tab.Screen name='info' component={Salads}
            options={{
                tabBarLabel: 'Informações',
                tabBarIcon:() => <MaterialIcons name='info' size={30} />
            }}
        />
    </Tab.Navigator>
)

export default SettingsNavigation
    


import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Salads from '../screens/category/salads';
import Savory from '../screens/category/savorys';
import Sweets from '../screens/category/sweets';
import Home from '../screens/home';

import CustomDrawerContent from '../components/CustomDrawerContent';

import SettingsNavigation from '../navigations/settings';

import styles from './styles';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator 
        initialRouteName="home" 
        drawerStyle={styles.container} 
        drawerContentOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: 'green',
            inactiveTintColor: 'white',
            inactiveBackgroundColor: '#3CB371',
            // itemStyle: { backgroundColor: '#3CB371'}, 
            // labelStyle: { color: 'white'},
        }}
        
        // drawerType= 'permanent'
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen 
            name="home" 
            component={SettingsNavigation} 
            options={{
                drawerLabel: 'Inicio',
                drawerIcon: () => (<MaterialIcons name="home" size={30} color="white"/>)
                }} 
        />
        <Drawer.Screen 
            name="salads" 
            component={Salads} 
            options={{
                title: 'Saladas',
                // drawerLabel: 'Saladas', 
                drawerIcon: () => (<MaterialIcons name="local-dining" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="savorys" 
            component={Savory} 
            options={{
                title: 'Salgados',
                // drawerLabel: 'Salgados', 
                drawerIcon: () => (<MaterialIcons name="local-pizza" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="sweets" 
            component={Sweets}  
            options={{
                title: 'Doces',
                // drawerLabel: 'Doces', 
                drawerIcon: () => (<MaterialIcons name="cake" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="configurações" 
            component={SettingsNavigation}  
            options={{
                title: 'Configurações',
                // drawerLabel: 'Doces', 
                drawerIcon: () => (<MaterialIcons name="settings" size={30} color="white"/>)
            }} 
        />
    </Drawer.Navigator>
)

export default DrawerNavigation



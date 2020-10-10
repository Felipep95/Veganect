import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Salads from '../screens/category/salads';
import Savory from '../screens/category/savorys';
import Sweets from '../screens/category/sweets';
import Home from '../screens/home';

import CustomDrawerContent from '../components/CustomDrawerContent';
import SettingsNavigation from '../navigations/settings';
import Settings from '../screens/settings-screen';

import MainNavigator from '../navigations/index';

import styles from './styles';
// import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator 
        initialRouteName="home" 
        drawerStyle={styles.container} 
        drawerContentOptions={{
            activeTintColor: 'white',
            activeBackgroundColor: 'green',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
        <Drawer.Screen 
            name="home" 
            component={SettingsNavigation} 
            options={{
                title: 'Inicio',
                drawerIcon: () => (<MaterialIcons name="home" size={30} color="white"/>)
            }} 
        />
        
        {/* <Drawer.Screen 
            name="salads" 
            component={Salads} 
            options={{
                title: 'Saladas',
               drawerIcon: () => (<MaterialIcons name="local-dining" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="savorys" 
            component={Savory} 
            options={{
                title: 'Salgados',
                drawerIcon: () => (<MaterialIcons name="local-pizza" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="sweets" 
            component={Sweets}  
            options={{
                title: 'Doces',
                drawerIcon: () => (<MaterialIcons name="cake" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="configurações" 
            component={Settings}  
            options={{
                title: 'Configurações',
                drawerIcon: () => (<MaterialIcons name="settings" size={30} color="white"/>)
            }} 
        /> */}
    </Drawer.Navigator>
)

export default DrawerNavigation



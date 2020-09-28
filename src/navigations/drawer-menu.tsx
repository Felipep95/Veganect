import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Salads from '../screens/category/salads';
import Savory from '../screens/category/savorys';
import Sweets from '../screens/category/sweets';
import Home from '../screens/home';

import styles from './styles';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
    <Drawer.Navigator initialRouteName="home" drawerStyle={styles.container}>
        <Drawer.Screen name="home" component={Home} options={{drawerLabel: 'Inicio'}} />
        <Drawer.Screen name="salads" component={Salads} options={{drawerLabel: 'Saladas'}} />
        <Drawer.Screen name="savorys" component={Savory} options={{drawerLabel: 'Salgados'}} />
        <Drawer.Screen name="sweets" component={Sweets}  options={{drawerLabel: 'Doces'}} />
    </Drawer.Navigator>
)

export default DrawerNavigation



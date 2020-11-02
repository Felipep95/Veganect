import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/home';

import Salads from '../screens/category/salads';
import Savory from '../screens/category/savorys';
import Sweets from '../screens/category/sweets';

import createnewCategory from '../screens/createNewCategory';
import createNewRecipe from '../screens/createNewRecipes';

import CustomDrawerContent from '../components/CustomDrawerContent';
import tabBar from '../navigations/tabBar';
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
            component={tabBar} 
            options={{
                title: 'Inicio',
                drawerIcon: () => (<MaterialIcons name="home" size={30} color="white"/>)
            }} 
        />
        
        {/* <Drawer.Screen 
            name="Cadastrar categoria" 
            component={createnewCategory} 
            options={{
                title: 'Saladas',
               drawerIcon: () => (<MaterialIcons name="local-dining" size={30} color="white"/>)
            }} 
        />
        <Drawer.Screen 
            name="Cadastrar receita" 
            component={createNewRecipe} 
            options={{
                title: 'Salgados',
                drawerIcon: () => (<MaterialIcons name="local-pizza" size={30} color="white"/>)
            }} 
        /> */}
        
    </Drawer.Navigator>
)

export default DrawerNavigation



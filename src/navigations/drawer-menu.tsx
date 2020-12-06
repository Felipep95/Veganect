import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import createnewCategory from '../screens/createNewCategory';
import createNewRecipe from '../screens/createNewRecipes';

import CustomDrawerContent from '../components/CustomDrawerContent';
import tabBar from '../navigations/tabBar';

import styles from './styles';

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
    </Drawer.Navigator>
)

export default DrawerNavigation



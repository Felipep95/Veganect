import React from 'react';
import { View, Text } from 'react-native';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';

import Toolbar from '../../components/toolbar';
import styles from './styles';

const Home = () => {
    const nav = useNavigation();
    const route = useRoute();
    // @ts-ignore
    // const { email } = route.params;
    
    return (
        <>
        <Toolbar title='Veganect' menu />
        <View style={styles.container}>
            <Text style={styles.text}>Bem Vindo(a)</Text>
        </View>
        </>
     )
}

export default Home
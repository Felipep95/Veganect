import React from 'react';
import { Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Toolbar from '../../../components/toolbar';

import styles from '../styles';

const Sweets = () => {
    const nav = useNavigation();
    const route = useRoute();
    return ( 
        <View style={styles.container}>
            <Toolbar title='Doces' back/>
            {/* <Button buttonStyle={styles.buttonColor} title="Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer)}/>
            <Button buttonStyle={styles.buttonColor} title="Sair" onPress={() => nav.goBack()}/> */}
        </View>
    )
}

export default Sweets
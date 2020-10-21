import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Toolbar from '../../components/toolbar';

import styles from './styles';

const Settings = () => {

    const nav = useNavigation();
    return (
        <View style={styles.container}>
             {/* <Toolbar title='Configurações' settings /> */}
            <Text style={styles.text}>Configurações</Text>
            <Button title='Voltar' color='#3CB371' onPress={() => nav.goBack()}/>
        </View>
    )
}

export default Settings
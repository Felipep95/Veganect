import React from 'react';
import { View, Text, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Toolbar from '../../components/toolbar';
import styles from './styles';
import Sweets from '../category/sweets';

const Home = () => {
    const nav = useNavigation();
    const route = useRoute();
    // @ts-ignore
    // const { email } = route.params;
    
    return (
        <>
        <Toolbar title='Receitas' menu />
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={{backgroundColor: '#3CB371'}}>
                        <Card.Title style={styles.cardTitle}>Doces</Card.Title>
                        {/* <Text style={{color: 'white', borderRadius: 10, textAlign: 'center'}} >Doces</Text> */}
                    </View>
                    <Card.Divider style={styles.cardDivider}/>
                    <Card.Image source={require('../../assets/receitas/doces/doces_background_main.jpg')} style={styles.cardImage}/>
                    <View style={styles.buttonConfig}>
                        <Button title='Ver Receitas' color={'#3CB371'} onPress={() => nav.navigate('doces')}/>
                    </View>
                </Card>
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={{backgroundColor: '#3CB371'}}>
                        <Card.Title style={styles.cardTitle}>Saladas</Card.Title>
                        {/* <Text style={{color: 'white', borderRadius: 10, textAlign: 'center'}} >Doces</Text> */}
                    </View>
                    <Card.Divider style={styles.cardDivider}/>
                    <Card.Image source={require('../../assets/receitas/saladas/saladas_background.jpeg')} style={styles.cardImage}/>
                    <View style={styles.buttonConfig}>
                        <Button title='Ver Receitas' color={'#3CB371'} onPress={() => nav.navigate('saladas')}/>
                    </View>
                </Card>
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={{backgroundColor: '#3CB371'}}>
                        <Card.Title style={styles.cardTitle}>Salgados</Card.Title>
                        {/* <Text style={{color: 'white', borderRadius: 10, textAlign: 'center'}} >Doces</Text> */}
                    </View>
                    <Card.Divider style={styles.cardDivider}/>
                    <Card.Image source={require('../../assets/receitas/salgados/salgados_background3.jpg')} style={styles.cardImage}/>
                    <View style={styles.buttonConfig}>
                        <Button title='Ver Receitas' color={'#3CB371'} onPress={() => nav.navigate('salgados')}/>
                    </View>
                </Card>
            </ScrollView>
        </View>
        </>
     )
}

export default Home
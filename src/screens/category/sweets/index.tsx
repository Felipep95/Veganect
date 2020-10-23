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
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Bolo de milho caseiro </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/doces/bolo_de_milho_caseiro.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Brigadeiro de inhame </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/doces/brigadeiro_de_inhame.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Cheesecake de maçã </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/doces/cheesecake_de_maca.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Pavê de paçoca </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/doces/pave_de_pacoca.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Pêra grelhada </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/doces/pera_grelhada.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
        </ScrollView>
        </View>
    )
}

export default Sweets
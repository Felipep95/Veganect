import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Toolbar from '../../../components/toolbar';

import styles from '../styles';

const Savory = () => {
    const nav = useNavigation();
    const route = useRoute();
    
    return (
        <View style={styles.container}>
            <Toolbar title='Salgados' back/>
            {/* <Button buttonStyle={styles.buttonColor} title="Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer)}/>
            <Button buttonStyle={styles.buttonColor} title="Sair" onPress={() => nav.goBack()}/> */}
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Coxinha de carne de caju </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/salgados/coxinha_carne_de_caju.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Croquete de palmito </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/salgados/croquete_de_palmito.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Empada de alho poro </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/salgados/empada_de_alho_poro.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Nhoque de batata </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/salgados/nhoque_de_batata.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
                
                <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}> Pastel simples </Card.Title>
                    </View>
                    <Card.Divider/>
                    <Card.Image source={require('../../../assets/receitas/salgados/pastel_simples.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.text}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </Text>
                </Card>
        </ScrollView>
        </View>
    )
}

export default Savory


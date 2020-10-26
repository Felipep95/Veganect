import React from 'react';
import { Text, View, } from 'react-native';
import { Card, } from 'react-native-elements';

import Toolbar from '../../components/toolbar';

import styles from './styles'; 


const RecipesDetails = () => {
    return (
        <View style={styles.container}>
            <Toolbar title='Detalhes' back/>
            <Card containerStyle={[styles.cardContainer]}>
                    <View style={styles.cardTitleBackground}>
                        <Card.Title style={styles.cardTitle}>Doce de milho</Card.Title>
                        {/* <Text style={{color: 'white', borderRadius: 10, textAlign: 'center'}} >Doces</Text> */}
                    </View>
                    <Card.Divider style={styles.cardDivider}/>
                    <Card.Image source={require('../../assets/receitas/doces/bolo_de_milho_caseiro.jpg')} style={styles.cardImage}/>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.cardTitleText}>Ingredientes:</Text>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </ul>
                    <Card.Divider style={styles.cardDivider}/>
                    <Text style={styles.cardTitleText}>Modo de preparo: </Text>
                    <Text style={styles.cardText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
            </Card>
        </View>
    );
}

export default RecipesDetails
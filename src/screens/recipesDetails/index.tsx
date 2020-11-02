import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Card, ListItem, } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Toolbar from '../../components/toolbar';

import styles from './styles'; 

type recipeDetails = Array<{
    id: string;
    name: string;
}>

const ingredientsList: recipeDetails = [
    {
        id: '1',
        name: 'item 1'
    },
    {
        id: '2',
        name: 'item 2'
    },
    {
        id: '3',
        name: 'item 3'
    },
    {
        id: '4',
        name: 'item 4'
    },
    {
        id: '5',
        name: 'item 5'
    },
]

const RecipesDetails = () => {
    return (
        <View style={styles.container}>
            <Toolbar title='Detalhes' back/>
            <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center',marginHorizontal: 20,}}>
                <Card containerStyle={[styles.cardContainer]}>
                        <View style={styles.cardTitleBackground}>
                            <Card.Title style={styles.cardTitle}>Doce de milho</Card.Title>
                            {/* <Text style={{color: 'white', borderRadius: 10, textAlign: 'center'}} >Doces</Text> */}
                        </View>
                        <Card.Divider style={styles.cardDivider}/>
                        <Card.Image source={require('../../assets/receitas/doces/bolo_de_milho_caseiro.jpg')} style={styles.cardImage}/>
                        <Card.Divider style={styles.cardDivider}/>
                        <Text style={styles.cardTitleText}>Ingredientes:</Text>
                        
                        <Text style={styles.textItem}>item 1</Text>
                        <Text style={styles.textItem}>item 2</Text>
                        <Text style={styles.textItem}>item 3</Text>
                        <Text style={styles.textItem}>item 4</Text>
                        <Text style={styles.textItem}>item 5</Text>
                        
                            {/* <FlatList
                                data={ingredientsList}
                                keyExtractor={recipeDetails => recipeDetails.id}
                                showsVerticalScrollIndicator ={false}
                                showsHorizontalScrollIndicator={false}
                                initialNumToRender={0}
                                renderItem={({item: recipeDetails}) => (
                                    <Text style={{fontSize: 20}} > {recipeDetails.name} </Text>
                                )}
                            /> */}
                        
                        <Card.Divider style={styles.cardDivider}/>
                        <Text style={styles.cardTitleText}>Modo de preparo: </Text>
                        <Text style={styles.cardText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. 
                        </Text>
                </Card>
            </ScrollView>
        </View>
        
    );
}

export default RecipesDetails
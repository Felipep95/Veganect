import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import Toolbar from '../../../components/toolbar';

import BoloDeMilhoCaseiro from '../../../assets/receitas/doces/bolo_de_milho_caseiro.jpg';
import BrigadeiroDeInhame from '../../../assets/receitas/doces/brigadeiro_de_inhame.jpg';
import CheesecakeDeMaca from '../../../assets/receitas/doces/cheesecake_de_maca.jpg';
import PaveDePacoca from '../../../assets/receitas/doces/pave_de_pacoca.jpg';
import PeraGrelhada from '../../../assets/receitas/doces/pera_grelhada.jpg';

import styles from '../styles';

type Recipe = Array<{
    id: string;
    title: string;
    image: object;
    description: string;
}>

const Sweets = () => {
    const nav = useNavigation();
    const route = useRoute();

    const sweetsListRecipes: Recipe = [
        {
            id: "1",
            title: "Bolo de milho caseiro",
            image: BoloDeMilhoCaseiro,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "2",
            title: "Brigadeiro de inhame",
            image: BrigadeiroDeInhame,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "3",
            title: "Cheesecake de maçã",
            image: CheesecakeDeMaca,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "4",
            title: "Pavê de paçoca",
            image: PaveDePacoca,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "5",
            title: "Pera grelhada",
            image: PeraGrelhada,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ];
    
    return ( 
        <View style={styles.container}>
            <Toolbar title='Doces' back/>
            <FlatList 
                data={sweetsListRecipes}
                keyExtractor={Recipe => Recipe.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={0}
                renderItem={({item: Recipe}) => (
                    <Card containerStyle={[styles.cardContainer]}>
                        <View style={styles.cardTitleBackground}>
                            <Card.Title style={styles.cardTitle}> {Recipe.title} </Card.Title>
                        </View>
                        <Card.Divider style={styles.cardDivider}/>
                        <Card.Image source={Recipe.image} style={styles.cardImage}/>
                        <Card.Divider style={styles.cardDivider}/>
                        <Text style={styles.text}>
                            {Recipe.description} 
                        </Text>
                        <View style={styles.buttonConfig}>
                            <Button title='Ver ingredientes e modo de preparo' color={'#3CB371'} onPress={() => nav.navigate('recipesDetails')}/>
                        </View>
                    </Card>
                )}
            />
        </View>
    )
}

export default Sweets
import React from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

import Toolbar from '../../../components/toolbar';

import CoxinhaCarneDeCaju from '../../../assets/receitas/salgados/coxinha_carne_de_caju.jpg';
import CroqueteDePalmito from '../../../assets/receitas/salgados/croquete_de_palmito.jpg';
import EmpadaDeAlhoPoro from '../../../assets/receitas/salgados/empada_de_alho_poro.jpg';
import NhoqueDeBatata from '../../../assets/receitas/salgados/nhoque_de_batata.jpg';
import PastelSimples from '../../../assets/receitas/salgados/pastel_simples.jpg';

import styles from '../styles';

type Recipe = Array<{
    id: string;
    title: string;
    image: object;
    description: string;
}>

const Savory = () => {
    const nav = useNavigation();
    const route = useRoute();
    
    const savorysListRecipes: Recipe = [
        {
            id: "1",
            title: "Coxinha de carne de caju",
            image: CoxinhaCarneDeCaju,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "2",
            title: "Croquete de palmito",
            image: CroqueteDePalmito,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "3",
            title: "Empada de alho poro",
            image: EmpadaDeAlhoPoro,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "4",
            title: "Nhoque de batata",
            image: NhoqueDeBatata,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id: "5",
            title: "Pastel simples",
            image: PastelSimples,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
    ];

    return (
        <View style={styles.container}>
            <Toolbar title='Salgados' back/>
            <FlatList 
                data={savorysListRecipes}
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
                            <Button title='Ver ingredientes e modo de preparo' color={'#3CB371'} onPress={() => nav.navigate('doces')}/>
                        </View>
                    </Card>
                )}
            />
        </View>
    )
}

export default Savory

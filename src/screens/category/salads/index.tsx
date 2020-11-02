import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';

import Toolbar from '../../../components/toolbar';

import CouveMacaMilhoVerde from '../../../assets/receitas/saladas/couve_maca_milhoverde.jpg';
import PrimaveraDeAspargos from '../../../assets/receitas/saladas/primavera_de_aspagos.jpg';
import ProteicaVegana from '../../../assets/receitas/saladas/proteica_vegana.jpg';
import RepolhoRoxoBeterraba from '../../../assets/receitas/saladas/repolho_roxo_beterraba.jpg';
import SaladaMista from '../../../assets/receitas/saladas/salada_mista.webp';

import styles from '../styles';

type Recipe = Array<{
  id: string;
  title: string;
  image: object;
  description: string;
}>

const Salads = () => {
  const nav = useNavigation();
  const route = useRoute();

  const saladsListRecipes: Recipe = [
    {
      id: "1",
      title: "Salada de couve de maçã com milho verde",
      image: CouveMacaMilhoVerde,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: "2",
      title: "Salada Primavera de aspagos",
      image: PrimaveraDeAspargos,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: "3",
      title: "Salada proteica vegana",
      image: ProteicaVegana,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: "4",
      title: "Salada de repolho roco com beterraba",
      image: RepolhoRoxoBeterraba,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      id: "5",
      title: "Salada mista",
      image: SaladaMista,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

  ];
    
  return (
      <View style={styles.container}>
        <Toolbar title='Saladas' back/>
        <FlatList
          data={saladsListRecipes}
          keyExtractor={Recipe => Recipe.id}
          showsVerticalScrollIndicator ={false}
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

export default Salads


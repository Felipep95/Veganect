import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';

import Toolbar from '../../../components/toolbar';


import styles from '../styles';

const Salads = () => {
  const nav = useNavigation();
  const route = useRoute();
    
  return (
      <View style={styles.container}>
        <Toolbar title='Saladas' back/>
        {/* <Button buttonStyle={styles.buttonColor} title="Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer)}/>
        <Button buttonStyle={styles.buttonColor} title="Sair" onPress={() => nav.goBack()}/> */}

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Card containerStyle={[styles.cardContainer]}>
            <Card.Title style={styles.cardTitle}> Salada de couve de maçã com milho verde</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/receitas/saladas/couve_maca_milhoverde.jpg')} style={styles.cardImage}/>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </Text>
          </Card>
          <Card containerStyle={[styles.cardContainer]}>
            <Card.Title style={styles.cardTitle}> Salada Primavera de aspagos </Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/receitas/saladas/primavera_de_aspagos.jpg')} style={styles.cardImage}/>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </Text>
          </Card>
          <Card containerStyle={[styles.cardContainer]}>
            <Card.Title style={styles.cardTitle}>Salada proteica vegana</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/receitas/saladas/proteica_vegana.jpg')} style={styles.cardImage}/>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </Text>
          </Card>
          <Card containerStyle={[styles.cardContainer]}>
            <Card.Title style={styles.cardTitle}>Salada de repolho roco com beterraba</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/receitas/saladas/repolho_roxo_beterraba.jpg')} style={styles.cardImage}/>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </Text>
          </Card>
          <Card containerStyle={[styles.cardContainer]}>
            <Card.Title style={styles.cardTitle}>Salada mista</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../../../assets/receitas/saladas/salada_mista.webp')} style={styles.cardImage}/>
            <Text style={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </Text>
          </Card>
        </ScrollView>
      </View>
    )
}

export default Salads


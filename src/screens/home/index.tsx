import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { ScrollView} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

const Home = () => {
    const nav = useNavigation();
    const route = useRoute();
    //@ts-ignore
    // const { email } = route.params;
    
    return (
        <View style={styles.container}>
            <View>
                <Button buttonStyle={styles.buttonColor} title="Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer)}></Button>
                <Button buttonStyle={styles.buttonColor} title="voltar" onPress={() => nav.goBack()}></Button>
                <Text style={styles.welcome}> Bem vindo(a) </Text>
            </View>
            
            <Text style={styles.recipes}>Receitas</Text>
           
            <ScrollView contentContainerStyle={styles.scrollViewConfig} alwaysBounceVertical={true}>
            
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Cheesecake De Maçã</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/doces/cheesecake_de_maca.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Primavera De Aspagos</Card.Title>
                        <Card.Divider />
                        <Card.Image source={require('./../../../src/assets/receitas/saladas/primavera_de_aspagos.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Nhoque De Batata</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/salgados/nhoque_de_batata.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Cheesecake De Maçã</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/doces/cheesecake_de_maca.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Primavera De Aspagos</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/saladas/primavera_de_aspagos.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.cardTitle}>Nhoque De Batata</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/salgados/nhoque_de_batata.jpg')} style={styles.cardImage}/>
                        <Text style={styles.text}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </Text>
                    </Card>
               
            </ScrollView> 
            
            {/* <Button buttonStyle={styles.buttonConfig} title="voltar" onPress={() => nav.goBack()}></Button> */}

        </View>
        
    )
}

export default Home
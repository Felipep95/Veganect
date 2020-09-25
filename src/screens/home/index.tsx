import { useNavigation, useRoute } from '@react-navigation/native';
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
    const { email } = route.params;
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}> Bem vindo (a) {email}</Text>
            </View>
            <Text style={styles.recipes}>Receitas</Text>
            {/* <SafeAreaView style={styles.container}> */}
                 <ScrollView contentContainerStyle={styles.middleContainer} alwaysBounceHorizontal={true}>
                    <View style={styles.viewConfig}>
                        <Card containerStyle={[styles.cardConfig]}>
                            <Card.Title style={styles.textColor}>Cheesecake De Maçã</Card.Title>
                            <Card.Divider/>
                            <Card.Image source={require('./../../../src/assets/receitas/doces/cheesecake_de_maca.jpg')} style={styles.cardImage}/>
                            <Text style={styles.textColor}>
                                Cheesecake De Maçã...
                            </Text>
                        </Card>
                    </View>
                    <View style={styles.viewConfig}>
                        <Card containerStyle={[styles.cardConfig]}>
                            <Card.Title style={styles.textColor}>Primavera De Aspagos</Card.Title>
                            <Card.Divider/>
                            <Card.Image source={require('./../../../src/assets/receitas/saladas/primavera_de_aspagos.jpg')} style={styles.cardImage}/>
                            <Text style={styles.textColor}>
                                Salada de Aspargos...
                                Salada de Aspargos...
                                Salada de Aspargos...
                            </Text>
                        </Card>
                    </View>
                   <View style={styles.viewConfig}>
                    <Card containerStyle={[styles.cardConfig]}>
                            <Card.Title style={styles.textColor}>Nhoque De Batata</Card.Title>
                            <Card.Divider/>
                            <Card.Image source={require('./../../../src/assets/receitas/salgados/nhoque_de_batata.jpg')} style={styles.cardImage}/>
                            <Text style={styles.textColor}>
                                Nhoque De Batata...
                            </Text>
                        </Card>
                   </View>

                   


                </ScrollView>
            {/* </SafeAreaView> */}
            
            <Button buttonStyle={styles.buttonConfig} title="voltar" onPress={() => nav.goBack()}></Button>

        </View>
        
    )
}

export default Home
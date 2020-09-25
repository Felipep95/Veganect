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
            <SafeAreaView style={styles.container}>
                 <ScrollView contentContainerStyle={styles.middleContainer}>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.textColor}>Cheesecake De Maçã</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/doces/cheesecake_de_maca.jpg')} style={{height: 300, width: 300}}/>
                        <Text style={styles.textColor}>
                            2 pacotes de biscoito tipo Maria (400g)
                            1 colher (chá) de canela em pó
                            1/2 xícara (chá) de margarina ou manteiga sem sal derretida
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.textColor}>Primavera De Aspagos</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/saladas/primavera_de_aspagos.jpg')} style={{height: 300, width: 300}}/>
                        <Text style={styles.textColor}>
                            2 pacotes de biscoito tipo Maria (400g)
                            1 colher (chá) de canela em pó
                            1/2 xícara (chá) de margarina ou manteiga sem sal derretida
                        </Text>
                    </Card>
                    <Card containerStyle={[styles.cardConfig]}>
                        <Card.Title style={styles.textColor}>Nhoque De Batata</Card.Title>
                        <Card.Divider/>
                        <Card.Image source={require('./../../../src/assets/receitas/salgados/nhoque_de_batata.jpg')} style={{height: 300, width: 300}}/>
                        <Text style={styles.textColor}>
                            2 pacotes de biscoito tipo Maria (400g)
                            1 colher (chá) de canela em pó
                            1/2 xícara (chá) de margarina ou manteiga sem sal derretida
                        </Text>
                    </Card>
                </ScrollView>
            </SafeAreaView>
            
            <Button buttonStyle={styles.buttonConfig} title="voltar" onPress={() => nav.goBack()}></Button>

        </View>
        
    )
}

export default Home
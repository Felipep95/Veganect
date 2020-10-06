import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { DrawerActions, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView} from 'react-native-gesture-handler';
import {} from '@react-navigation/native'

import styles from '../styles';

const Salads = () => {
  const nav = useNavigation();
  const route = useRoute();
    
  return (
      <View style={styles.container}>
        <Button buttonStyle={styles.buttonColor} title="Menu" onPress={() => nav.dispatch(DrawerActions.openDrawer)}></Button>
        <Text>Saladas</Text>
      </View>
    )
}

export default Salads


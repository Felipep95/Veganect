import React from 'react';
import { Button, Image, Linking, Text, View } from 'react-native';
import { Icon, Avatar, Divider, ListItem } from 'react-native-elements';
import { color } from 'react-native-reanimated';
// import {} from 'react-native-paper';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Home from '../../screens/home';


import styles from './styles';
    
    function CustomDrawerContent(props: any) {

    const nav = useNavigation();
    
    return (
      <View>
        <View style={styles.drawerStyle}>
            <View style={styles.userInfo}>
              <Avatar
                  containerStyle={{backgroundColor: 'white', alignContent: 'center'}}
                  size="xlarge"
                  rounded
                  title="Profile"
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                  source={require('../../../assets/images/profile-picture.png')}
                  avatarStyle={styles.avatarSettings}
              />
              <Text style={styles.textConfig}>Felipe Pereira</Text>
              <Text style={styles.textConfig}>Felipepereira95@hotmail.com</Text>
              <Button title='sair' color='#3CB371' onPress={() => nav.navigate('login')}/>
            </View>
            
        </View>
      
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerStyle}>

          {/* <DrawerItemList {...props}/> */}
          <DrawerItem
              label="Inicio"
              onPress={() => nav.navigate('home')}
              labelStyle={{color: 'white'}}
          />
          <DrawerItem
              label="Configurações"
              onPress={() => nav.navigate('settings')}
              labelStyle={{color: 'white'}}
          />
          <View>
            
          </View>
      </DrawerContentScrollView> 
    </View>
    );
  }

  export default CustomDrawerContent
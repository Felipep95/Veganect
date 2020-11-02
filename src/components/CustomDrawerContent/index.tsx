import React from 'react';
import { Button, Image, Linking, Platform, Text, ToastAndroid, View } from 'react-native';
import { Icon, Avatar, Divider, ListItem } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import Home from '../../screens/home';

import styles from './styles';


// FALTA TERMINAR
interface Data {
  image: string;
}

const handleCreateNewCategory = (data: Data) => {
  const nav = useNavigation();
  nav.navigate("home")
}

const openPhotoLibrary = async (setFieldValue) => {
  const response = await Permissions.askAsync(Permissions.CAMERA_ROLL)

  if ( Platform.OS == 'web' || response.granted ) {
      
      const photo = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [16,9],
          base64: true,
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5
      })

      if (!photo.cancelled) {
          const image = (Platform.OS == 'web' ? photo.uri :'data:image/jpge;base64,'+ photo.base64 );
          setFieldValue("image", image)
      }
  }
  else {
      ToastAndroid.show('Necessário permissão para acessar album de fotos', ToastAndroid.LONG);
      // console.log('o dispositivo precisa de permissão para acessar o album de fotos')
  }
}

// /\ FALTA TERMINAR
    
    function CustomDrawerContent(props: any) {

    const nav = useNavigation();
    
    return (
      <View>
        <View style={styles.drawerStyle}>
            <View style={styles.userInfo}>
              <Avatar
                  containerStyle={styles.container}
                  size="xlarge"
                  rounded
                  title="Profile"
                  onPress={() => openPhotoLibrary}
                  activeOpacity={0.7}
                  source={require('../../../assets/images/carrot.png')}
                  // source={(values.image ? {uri: values.image} : require('../../../assets/images/carrot.png'))}
                  avatarStyle={styles.avatarSettings}
              />
              <Text style={styles.avatarChangeSettings} >Alterar Imagem</Text>

              <Text style={styles.textConfig}>Felipe Pereira</Text>
              <Text style={styles.textConfig}>Felipepereira95@hotmail.com</Text>
            </View>
        </View>
      
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerStyle}>

          {/* <DrawerItemList {...props}/> */}
          
          <DrawerItem 
              label="Inicio"
              onPress={() => nav.navigate('home')}
              labelStyle={{color: 'white', textAlign: 'center'}}
              // icon={() => <Icon name={'home'} color={'white'} size={30} />}
              activeTintColor='#3CB371'
              activeBackgroundColor='#2E8B57'
              inactiveBackgroundColor='#3CB371'
          />
          <DrawerItem
              label="Adicionar Categoria"
              onPress={() => nav.navigate('createCategory')}
              labelStyle={{color: 'white', textAlign: 'center'}}
              // icon={() => <Icon name={'settings'} color={'white'} size={30} />}
              activeTintColor='#3CB371'
              activeBackgroundColor='#2E8B57'
              inactiveBackgroundColor='#3CB371'
          />
          <DrawerItem
              label="Adicionar Receita"
              onPress={() => nav.navigate('createRecipes')}
              labelStyle={{color: 'white', textAlign: 'center'}}
              // icon={() => <Icon name={'settings'} color={'white'} size={30} />}
              activeTintColor='#3CB371'
              activeBackgroundColor='#2E8B57'
              inactiveBackgroundColor='#3CB371'
          />
          
          <View style={{alignItems: 'center', marginTop: 230}}>
                <Button title='sair' color='#3CB371' onPress={() => nav.navigate('login')}/>
          </View>
          
        </DrawerContentScrollView> 

        
      
      </View>
    );
  }

  export default CustomDrawerContent
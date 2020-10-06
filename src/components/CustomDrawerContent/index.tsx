import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Image, Linking, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { Icon, Avatar } from 'react-native-elements';

import styles from './styles';
    
  function CustomDrawerContent(props: any) {
    return (
    //   <DrawerContentScrollView contentContainerStyle={styles.drawerStyle} {...props}>
    //     <DrawerItemList {...props}/>
    //     <DrawerItem
    //         label="Ajuda" 
    //         <Icon color={color} size={size} name={focused ? 'heart' : 'heart-outline'} />
    //         onPress={() => Linking.openURL('https://leilao-vegano.jumpseller.com/')}
            
    //     />
    //     <Image 
    //         source={require('../../../assets/images/carrot.png')}
    //         style={styles.container}     
    //     />
    //   </DrawerContentScrollView>
    <View style={styles.drawerStyle}>
            <View style={styles.userInfo}>
                <Avatar
                    containerStyle={{backgroundColor: 'white', alignContent: 'center'}}
                    size="xlarge"
                    rounded
                    title="MT"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    source={require('../../../assets/images/musicAppleProfile.jpg')}
                    avatarStyle={styles.teste}
                />
                <Text style={styles.textConfig}>Felipe Pereira</Text>
                <Text style={styles.textConfig}>Felipepereira95@hotmail.com</Text>
            </View>

            <DrawerItemList {...props}/>
    </View>
    );
  }

  export default CustomDrawerContent
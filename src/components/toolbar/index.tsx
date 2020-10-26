import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export interface ToolbarProps {
    title: string;
    menu?: boolean;
    back?: boolean;
    settings?: boolean;
}

const toolbar = (props: ToolbarProps) => {
    const nav = useNavigation()
    
    let leftComponent:{icon?:string, color?:string, size?:number, onPress?:any} = {}
    
    
    if (props.menu) leftComponent =  {icon:'menu', color:'white', size:30, onPress: () => nav.dispatch(DrawerActions.openDrawer())}
    if (props.back) leftComponent =  {icon:'arrow-back', color:'white', size:30, onPress: () => nav.goBack()}

   

    return (
        <Header 
            leftComponent={leftComponent}
            centerComponent={{text: props.title, style:{color: 'white', textTransform:'uppercase'}}}
            rightComponent={{icon: 'exit-to-app', color: 'white',size: 30, onPress: () => nav.navigate('login')}}
            containerStyle={{backgroundColor: '#3CB371'}}
        />
    )
}

export default toolbar
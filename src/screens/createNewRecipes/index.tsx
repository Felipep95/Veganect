import React, { useState } from 'react';
import { Text, TextInput , View, Platform, ToastAndroid, ActivityIndicator, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Formik } from 'formik';
import * as Yup from 'yup';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import firebase from "firebase";
import 'firebase/firestore';

import Toolbar from '../../components/toolbar';

import styles from './styles';

interface Data {
    id: string;
    name: string;
    category: string;
    ingredients: string;
    prepareMode: string;
}

interface Image {
    imgBlob: Blob;
    imgUri: string;
}

const HandleCreateNewRecipe = (data: Data) => {
    const db = firebase.firestore();
    const storage = firebase.storage();
    const nav  = useNavigation();
    const [image, setImage] = useState<Image>({} as Image);
    // nav.navigate("home");
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
        });

        if (!photo.cancelled) {
            const image = await fetch(photo.uri);
            const blobImage = await image.blob();

            const newImage = {
              imgBlob: blobImage,
              imgUri: photo.uri,
            }
            // setImage(newImage); //corrigir erro
        }
    } else {
        ToastAndroid.show('Necessário permissão para acessar album de fotos', 
        ToastAndroid.LONG);
    }
}

const CreateNewRecipes = () => {
    return (
        <>
        <Toolbar title='Adicionar nova receita' back />
        <View style={styles.container}>
            
            <Formik
                initialValues={{id:'', image:'', name: '', category:'', ingredients:'', prepareMode:''}}
                onSubmit={HandleCreateNewRecipe}
            >

{ ({values, setFieldValue, handleChange, handleSubmit, handleBlur, isSubmitting, isValid}) => (
    <View style={{flex: 1, justifyContent: 'space-evenly', marginTop: 20 }}>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity onPress={() => openPhotoLibrary(setFieldValue)}>
                <Image source={
                    (values.image ? {uri: values.image} : require('../../../assets/images/carrot.png'))}
                    style={styles.imageConfig}
                />
            </TouchableOpacity>
        </View>
        <View style={styles.inputView}>
        <Input 
            inputStyle={styles.inputConfig}
            placeholder="Nome"
            placeholderTextColor="black"
            // leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
        />
        
        <Input 
            inputStyle={styles.inputConfig}
            placeholder="Informe a categoria"
            placeholderTextColor="black"
            // leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
            onChangeText={handleChange("category")}
            onBlur={handleBlur("category")}
        />

        <Input 
            inputStyle={styles.inputConfig}
            placeholder="Ingredientes"
            placeholderTextColor="black"
            // leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
            onChangeText={handleChange("ingredients")}
            onBlur={handleBlur("ingredients")}
        />
        <TextInput 
            // inputStyle={styles.inputConfig}
            style={styles.inputTextConfig}
            placeholder="Modo de preparo"
            placeholderTextColor="black"
            // leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
            onChangeText={handleChange("prepareMode")}
            onBlur={handleBlur("prepareMode")}
        />
    </View>

    { isSubmitting && <ActivityIndicator size= {30} />}
    { !isSubmitting && <Button title='Salvar' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
        
    </View>
    
)}

            </Formik>

        </View>
        </>
    );
}

export default CreateNewRecipes
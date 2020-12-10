import React, { useState} from "react";
import {  Alert, Image, ToastAndroid, View, Platform, ActivityIndicator }  from "react-native";
import { Input,Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Formik } from "formik";
import * as Yup from "yup";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import firebase from "firebase";
import 'firebase/firestore';

import Toolbar from "../../components/toolbar";

import carrotImg from "../../../assets/images/carrot.png";

import styles from "./styles";

interface Data {
  name: string;
}

interface Image {
  imgBlob: Blob;
  imgUri: string;
}

const CreateNewCategory = () => {
  const db = firebase.firestore();
  const storage = firebase.storage();
  const nav = useNavigation();
  const [image, setImage] = useState<Image>({} as Image);
  
  const openPhotoLibrary = async () => {
    const response = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
    if (Platform.OS == "web" || response.granted) {
      const photo = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [16, 9],
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      
  
      if (!photo.cancelled) {
        const image = await fetch(photo.uri);
        const blobImage = await image.blob();

        const newImage = {
          imgBlob: blobImage,
          imgUri: photo.uri,
        }

        setImage(newImage);
      }
    } else {
      ToastAndroid.show(
        "Necessário permissão para acessar album de fotos",
        ToastAndroid.LONG
      );
      // console.log('o dispositivo precisa de permissão para acessar o album de fotos')
    }
  };
  
  const handleCreateNewCategory = async (data: Data) => {
    console.log("entrou")
    const newCategory = await db.collection('category').doc();

    const refImage = storage
        .ref()
        .child(`category/${newCategory.id}`);

     await refImage.put(image.imgBlob);
      let imageURL = '';
  
     await refImage.getDownloadURL().then(url => {
          if (url) {
            imageURL = url;
          }
        });

  
      await newCategory.set({
        name: data.name,
        imageURL
      });

      nav.navigate("home");
    
  }
    
  return (
    <>
      <Toolbar title="Adicionar nova categoria" back />
      {/* <View style={{flex:0.5, width: '100%', padding: 30}}>  */}
      <View style={styles.container}>
        <Formik
          initialValues={{ name: "" }}
          onSubmit={handleCreateNewCategory}
        >
          {({
            values,
            setFieldValue,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
            isValid,
          }) => (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => openPhotoLibrary(setFieldValue)}
                >
                  <Image
                    source={
                      image.imgUri
                        ? { uri: image.imgUri }
                        : require("../../../assets/images/carrot.png")
                    }
                    style={styles.imageConfig}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              >
                <Input
                  inputStyle={styles.inputConfig}
                  placeholder="Nome da categoria"
                  placeholderTextColor="black"
                  // leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                />
              </View>

              {isSubmitting && <ActivityIndicator size={30} />}
              {!isSubmitting && (
                <Button
                  title="Salvar"
                  disabled={!isValid}
                  buttonStyle={styles.buttonColor}
                  onPress={() => handleSubmit()}
                ></Button>
              )}
            </View>
          )}
        </Formik>
      </View>
      {/* </View> */}
    </>
  );
};

export default CreateNewCategory;

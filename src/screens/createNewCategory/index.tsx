import React from 'react';
import { Alert, View } from 'react-native';
import { Input } from 'react-native-elements';

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles';

interface RecipeData {
    name: string;
    image: object;
}

function handeCreateNewCategory {
    // Alert.alert('Categoria registrada com sucesso!')
    console.log('Categoria registrada com sucesso!')
}

const CreateNewCategory = () => {
    return (
        <>
            <View style={{flex:0.5, width: '100%', padding: 30}}>
            <Formik
                initialValues={{ name:'', image:'' }}
                onSubmit={() => handeCreateNewCategory()}
            >   
             { ({values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur}) => (
                <View>
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Insira o nome da categoria"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                    />
                    
                </View>

                    
                
            )}

            </Formik>
        </View>
        </>
    );
}
import React from 'react';
import { View, Image, Text, ToastAndroid, ActivityIndicator } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Toolbar from '../../components/toolbar';

import styles from './styles'; 
import firebase from 'firebase';
import 'firebase/firestore';

// import Input from '../../components/Input';

interface Data {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

interface User {
    email: string;
    password: string;
    name: string;
}

const signUp = () => {
    const nav = useNavigation();
    const dbFiresote = firebase.firestore();

    const signUp = async (user:User) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(userCreated => {
                dbFiresote.collection('users').doc(userCreated.user?.uid).set({
                    name: user.name,
                }).then(() => {
                    firebase.auth().signOut();
                    nav.navigate("login");
                })
            ToastAndroid.show('Usuário cadastrado com sucesso', ToastAndroid.SHORT);
        })
        .catch(erro => {
            switch(erro.code) {
                case 'auth/email-already-in-use': ToastAndroid.show("Erro: Email já está em uso",ToastAndroid.SHORT); break;
                default: ToastAndroid.show("Falhou", ToastAndroid.SHORT)
            }
            
        });
    }

    return (
        <>
        <Toolbar title='Cadastro de usuário' back />
        <Formik
            initialValues={{name: '', email: '', password: '', confirmPassword: '' }}
            validationSchema={Yup.object().shape({
                name: Yup.string().required('O campo nome é obrigatório!'),
                email: Yup.string().required('O campo email é obrigatório!'),
                password: Yup.string().required('O campo senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!'),
                confirmPassword: Yup.string().required('O campo confirmar senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!')
            })}
            onSubmit={values => signUp(values)}
        >
            { ({values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur}) => (
                <View style={styles.container}>
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Digite seu nome"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                        onChangeText={handleChange("name")}
                        onBlur={handleBlur("name")}
                    />
                    { touched.name && <Text style={styles.errors}>{errors.name}</Text>}
                    
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Digite seu email"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'envelope-o', iconStyle:styles.iconColor }}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                    />
                    { touched.email && <Text style={styles.errors}>{errors.email}</Text>}
                    
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Digite sua senha"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle:styles.iconColor }}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                    />
                    { touched.password && <Text style={styles.errors}>{errors.password}</Text>}
                    
                    <Input
                        inputStyle={styles.inputConfig}
                        placeholder="Digite sua senha novamente"
                        placeholderTextColor="white"
                        leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle:styles.iconColor }}
                        onChangeText={handleChange("confirmPassword")}
                        onBlur={handleBlur("confirmPassword")}
                    />
                    { touched.confirmPassword && <Text style={styles.errors}>{errors.confirmPassword}</Text>}
                    
                            { isSubmitting && <ActivityIndicator size= {30} />}
                            { !isSubmitting && <Button title='Cadastrar' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                </View>
            )}

        </Formik>

        </>
    )
};

export default signUp
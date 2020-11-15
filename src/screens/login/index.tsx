import React, { useReducer, useState } from 'react';
import { View, Image, Text, ActivityIndicator, ToastAndroid, Platform, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import firebase from 'firebase';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { AlertCustom, AlertInput } from '../../components/custom-alert/customAlert';

import styles from './styles'; 

interface User {
    email: string;
    password: string;
}

const Login = () => {
    
    const nav = useNavigation();
    const [error, setError] = useState('');
    const [openModal, setOpenModal] = useState(false);

    async function signIn (this: any, data: User)  {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            nav.navigate('home');
        }).catch(erro => {
        
        if (Platform.OS == 'android')
            ToastAndroid.show('Erro: Email ou senha incorreta', 3000)
            
        else
            Alert.alert('Erro', 'Erro: Email ou senha incorreta');
        })
    }
    
    const signUp = async (user:User) => {
        setOpenModal(false);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(() => ToastAndroid.show('Usuário cadastrado com sucesso', ToastAndroid.SHORT))
        .catch(erro => {
            switch(erro.code) {
                case 'auth/email-already-in-use': ToastAndroid.show("Erro: Email já está em uso",ToastAndroid.SHORT); break;
                default: ToastAndroid.show("Falhou", ToastAndroid.SHORT)
            }
            
        });
    }

    return (
        <>
            <View style={styles.container}>

                    <Image 
                        source={require('../../../assets/images/carrot.png')}
                        style={styles.imageConfig}
                    />
                    
                    <Text style={styles.textConfig}>Veganect</Text>

                <Formik 
                    initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('O campo email é obrigatório!').email('Precisa ser um email válido!'),
                        password: Yup.string().required('O campo Senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!')
                    })}
                    onSubmit={signIn}
                >
                    { ({values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                         <View style={{ flex:0.7, width: '100%', padding: 30 }} >
                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Email"
                                placeholderTextColor="white"
                                leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />
                            { touched.email && <Text style={styles.errors}>{errors.email}</Text>}
                            
                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Senha"
                                placeholderTextColor="white"
                                leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle:styles.iconColor }}
                                secureTextEntry={true}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                            /> 

                            { touched.password && <Text style={styles.errors}>{errors.password}</Text>}
                            
                            { isSubmitting && <ActivityIndicator size= {30} />}
                            { !isSubmitting && <Button title='Login' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                            {error != "" && <Text style={styles.errors}>{error}</Text>}

                            <TouchableOpacity onPress={() => {setOpenModal(true); }}>
                                <Text style={styles.textCreatAccount}>Não possui conta? Clique aqui para se cadastrar</Text>
                            </TouchableOpacity>
                     </View>
                     
                    )}
                </Formik>
                
                </View> 
                
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={signUp}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Campo precisa ser um email').required('Email obrigatório'),
                        password: Yup.string().min(6,'Mínimo 6 caracteres').required('Senha obrigatória')
                    })}
                >
                    {({ handleSubmit, handleChange, handleBlur, touched, errors }) => (
                        <AlertCustom 
                            onCancel={() => setOpenModal(false)}
                            onConfirm={handleSubmit}
                            visible={openModal}
                            title="Novo usuário">
                            <Text>Informe os dados do usuário</Text>
                            <AlertInput placeholder="Digite seu email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} touched={touched.email} error={errors.email} />
                            <AlertInput placeholder="Digite sua senha" onChangeText={handleChange('password')} onBlur={handleBlur('password')} touched={touched.password} error={errors.password}  password noBorder/>
                        </AlertCustom> 
                    )}
                </Formik>
        </>
    )
};

export default Login;
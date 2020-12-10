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

    async function signIn (data: User)  {
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

    const registerScreen = () => {
        nav.navigate('signUp')
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

                            
                     </View>
                     
                    )}
                </Formik>

                <TouchableOpacity onPress={registerScreen}>
                    <Text style={styles.textCreatAccount}>Não possui conta? Clique aqui para se cadastrar</Text>
                </TouchableOpacity>

                
                </View> 
        </>
    )
};

export default Login;
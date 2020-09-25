import React, { useReducer, useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

// import input from '../../components/Input';

import styles from './styles'; 

interface User {
    email: string;
    password: string;
}

const Login = () => {
    
    const nav = useNavigation();
    const [error, setError] = useState('');

    async function logar (data: User)  {
        setError("");
        await new Promise (resolve => setTimeout(() => resolve(), 2000))
        if (data.email == 'teste@teste.com' && data.password == '123456'){
            nav.navigate('home', {email: data.email})
        }else 
            setError('Erro: Email ou senha invalido');
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
                    onSubmit={logar}
                >
                    { ({values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                         <View style={{ flex:0.5, width: '100%', padding: 30 }} >
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

                <TouchableOpacity style={{display: 'flex', justifyContent: 'center', marginTop:15}} onPress={() => nav.navigate("signOn")}>
                    <Text style={styles.textCreatAccount}>Criar conta</Text>
                </TouchableOpacity>
                
            </View>
        </>
    )
};

export default Login;
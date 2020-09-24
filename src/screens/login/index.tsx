import React from 'react';
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

    async function logar (data: User)  {
        console.log("Entrou na função!");
        await new Promise (resolve => setTimeout(() => resolve(), 2000))
         
        if (data.email == 'teste@teste.com' && data.password == '123456'){
            nav.navigate("signIn")
            console.log('teste');
        }else 
            console.log('Email ou senha invalido');
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
                         <View style={{flex:0.5, width: '100%', padding: 30}} >
                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Email"
                                placeholderTextColor="white"
                                leftIcon={{ type: 'font-awesome', name: 'user', iconStyle:styles.iconColor }}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />
                            { touched.email && <Text style={styles.textColor}>{errors.email}</Text>}
                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Senha"
                                placeholderTextColor="white"
                                leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle:styles.iconColor }}
                                secureTextEntry={true}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                            /> 
                            { touched.password && <Text style={styles.textColor}>{errors.password}</Text>}
                            
                            { isSubmitting && <ActivityIndicator size= {30} />}
                            { !isSubmitting && <Button title='Login' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                            
                            
                     </View>
                    )}
               
                </Formik>

                <TouchableOpacity style={{display: 'flex', justifyContent: 'center'}}>
                                <Text style={styles.textCreatAccount}>Criar conta</Text>
                </TouchableOpacity>
                
            </View>
        </>
    )
};

export default Login;
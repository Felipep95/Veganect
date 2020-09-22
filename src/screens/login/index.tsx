import React from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles'; 

const Login = () => {

    const logar = async (dados: any) => {

        await new Promise (resolve => setTimeout(() => resolve(), 2000))
         console.log(dados);
        if (dados.email == 'teste@teste.com' && dados.senha == '123456')
            console.log('Logado com sucesso');
        else 
            console.log('Email ou senha invalido');
    }

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Image 
                        source={require('../../../assets/images/carrot.png')}
                        style={styles.imageConfig}
                    />
                    <Text style={styles.textConfig}>Veganect</Text>
                </View>

                <Formik 
                    initialValues={{email: '', senha: ''}}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('O campo email é obrigatório!').email('Precisa ser um email válido!'),
                        senha: Yup.string().required('O campo Senha é obrigatório!').min(8, 'A senha precisa ter no mínimo 8 caracteres!')
                    })}
                    onSubmit={logar}
                >
                    { ({values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                         <View>
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
                                onChangeText={handleChange("senha")}
                                onBlur={handleBlur("senha")}
                            /> 
                            { touched.senha && <Text style={styles.textColor}>{errors.senha}</Text>}
                            
                            { isSubmitting && <ActivityIndicator size= {30} />}
                            { !isSubmitting && <Button title='Login' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                            
                            <TouchableOpacity>
                                <Text style={styles.textCreatAccount}>Criar conta</Text>
                            </TouchableOpacity>
                     </View>
                    )}
               
                </Formik>
                
            </View>
        </>
    )
};

export default Login;
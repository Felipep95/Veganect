import React from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';

import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './styles'; 

const signIn = () => {
    const nav = useNavigation();

    return (
        <>
        <Text style={{padding: 60}}>Página de cadastro</Text>

        <Button title='Voltar' onPress={() => nav.goBack()} >Voltar</Button>
        </>
    )
};

export default signIn
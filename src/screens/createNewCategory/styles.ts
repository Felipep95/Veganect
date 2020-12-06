import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        backgroundColor: '#F0FFF0', // cor do background da tela de cadastro de receitas    (////#2E8B57 cor alternativa)
    },
    placeHolderColor: {
        color: 'black',
    },
    // remover depois
    iconColor: {
        color: 'black',
    },
    buttonColor: {
        backgroundColor: '#3CB371'
    },
    textConfig: {
        color: 'black',
        fontSize: 30,
        marginBottom: 30,
    },
    secondaryContainer: {
        justifyContent: 'center',
        color: 'green',
    },
    imageConfig: {
        width: 150,
        height: 150,
        borderRadius: 20, 
        backgroundColor: 'grey'
    },
    // remover depois
    inputConfig: {
        paddingLeft: 10,
        color: 'black',
        width: '100%',
        // backgroundColor: 'grey',
    },
    textCreatAccount: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    textColor: {
        color: 'white',
        textAlign: 'right',
        fontSize: 15,
    },
    errors: {
        color:"red", 
        fontSize: 15, 
        textAlign:"right"
    },
    viewInputConfig: {
        flex:0.5, 
        width: '100%', 
        padding: 30,
    }
});

export default styles
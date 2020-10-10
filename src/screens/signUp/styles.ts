import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: '#2E8B57',
    },
    placeHolderColor: {
        color: 'white',
    },
    // remover depois
    iconColor: {
        color: 'white',
    },
    buttonColor: {
        backgroundColor: '#3CB371'
    },
    textConfig: {
        color: 'white',
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
    },
    // remover depois
    inputConfig: {
        paddingLeft: 10,
        color: 'white',
        width: '100%'
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
import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    imageConfig: {
        width: 150,
        height: 150,
        marginTop: -80
    },
    // remover depois
    inputConfig: {
        paddingLeft: 10,
        color: 'white',
        width: '100%',
        height: 60,
    },
    textCreatAccount: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 30
    },
    textColor: {
        color: 'white',
        textAlign: 'right',
        fontSize: 15,
    },
    errors: {
        color:"red", 
        fontSize: 15, 
        textAlign:"right",
        // backgroundColor: '#3CB371',
    }
});

export default styles;
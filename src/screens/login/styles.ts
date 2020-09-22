import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    placeHolderColor: {
        color: 'white',
    },
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
    }
    
});

export default styles;
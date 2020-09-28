import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
    },
    text: {
        marginTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
    },
    cardConfig: {
        borderColor: '#3CB371',
        backgroundColor: '#3CB371',
        color: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewConfig: {
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardImage: {
        height: 300,
        width: 300,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
    },
})

export default styles;
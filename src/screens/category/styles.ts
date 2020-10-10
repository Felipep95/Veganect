import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
    },
    text: {
        // marginTop: 25,
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center'
    },
    scrollViewContainer: {
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        borderColor: '#3CB371',
        backgroundColor: '#3CB371',
        color: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 300,
        width: 300,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
    },
    buttonColor: {
        backgroundColor: '#3CB371',
    },
})

export default styles;
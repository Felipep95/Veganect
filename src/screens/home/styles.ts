import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
    },
    welcome: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    scrollViewConfig: {
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    buttonColor: {
        backgroundColor: '#3CB371',
    },
    buttonConfig: {
        marginTop: 50,
        backgroundColor: '#3CB371',
    },
    recipes: {
        marginTop: 10,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    cardConfig: {
        borderColor: 'white',
        backgroundColor: '#3CB371',
        color: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 300,
        width: 350,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        // textAlign: 'center',
    },
    // viewConfig: {
    //     flex: 1,
    //     margin: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // }
})

export default styles 
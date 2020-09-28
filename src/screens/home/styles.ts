import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
        justifyContent: 'center',
    },
    welcome: {
        marginTop: 25,
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
        marginTop: 30,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    cardConfig: {
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
        fontSize: 20
    },
    text: {
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
    },
    viewConfig: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default styles 
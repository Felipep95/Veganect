import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //#2E8B57 background verde
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    },
   buttonColor: {
        backgroundColor: '#3CB371',
    },
    buttonConfig: {
        marginTop: 30,
        backgroundColor: '#3CB371',
    },

    // card styles

    scrollViewContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        //#3CB371
        borderColor: '#3CB371',
        backgroundColor: 'white',
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
        // backgroundColor: 'white',
        color: 'white',
        fontSize: 20,
    },
    cardText: {
        // marginTop: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center'
    },
    cardDivider: {
        backgroundColor: '#3CB371',
    }
})

export default styles 
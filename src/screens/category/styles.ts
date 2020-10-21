import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // #2E8B57
        backgroundColor: 'white',
    },
    text: {
        // marginTop: 25,
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        alignItems: 'center'
    },
    scrollViewContainer: {
        //#2E8B57
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        borderColor: '#3CB371',
        //#3CB371
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 300,
        width: 350,
    },
    cardTitle: {
        color: 'black',
        fontSize: 20,
    },
    buttonColor: {
        backgroundColor: '#3CB371',
    },
})

export default styles;
import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white', // #2E8B57
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        // marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center', 
        alignItems: 'center'
    },
    scrollViewContainer: {
        backgroundColor: 'white', //#2E8B57
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        borderColor: '#3CB371',
        backgroundColor: 'white', //#3CB371
        color: 'black',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    cardImage: {
        height: 300,
        width: 300,
    },
    cardTitle: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitleBackground: {
        backgroundColor: '#3CB371',
        // borderRadius: 20,
        
    }, 
    cardDivider: {
        backgroundColor: '#3CB371',
        marginTop: 10,
    },
    buttonColor: {
        backgroundColor: '#3CB371',
    },
    buttonConfig: {
        marginTop: 30,
        backgroundColor: '#3CB371',
    },
})

export default styles;
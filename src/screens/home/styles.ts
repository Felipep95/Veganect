import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', //#2E8B57
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
        marginTop: 13,
        backgroundColor: '#3CB371',
        // borderRadius: 15,
    },

    // card styles

    scrollViewContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        borderColor: '#3CB371', //#3CB371
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardImage: {
        height: 300,
        width: 300,
        // borderRadius: 10,
    },
    cardTitle: {
        color: 'white', //#3CB371
        fontSize: 20,
        // justifySelf: 'center'
    },
    cardTitleBackground: {
        backgroundColor: '#3CB371',
        // borderRadius: 10, 
        marginBottom: 10,
    },
    cardText: {
        // marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
    cardDivider: {
        backgroundColor: '#3CB371',
        // marginTop: 10,
    }
})

export default styles 
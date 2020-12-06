import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignContent: 'center',
    },
    textConfig: {
        color: 'white',
        fontSize: 20,
    },
    drawerStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    avatarSettings: {
        width: 150,
        height: 150,
    },
    avatarChangeSettings: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        marginBottom: 10,
    },
    userInfo: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    buttonColor: {
        backgroundColor: '#3CB371',
    },
    exitButton: {
        alignItems: 'center', 
        marginTop: 100
    }
})

export default styles
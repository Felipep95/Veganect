import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    modal: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        borderRadius: 10
    },
    
    title: { textAlign:'center', fontSize: 20},
    btns: {flexDirection: 'row', justifyContent: 'flex-end'},
    
    input: {paddingVertical: 5},
     borderBottom: {borderBottomWidth: 1, borderBottomColor: 'lightgray'},
     erro: { textAlign: 'right', color: 'red' }
})

export default styles
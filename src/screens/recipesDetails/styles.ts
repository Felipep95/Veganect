import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        width: 350,
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
    },
    cardDivider: {
        backgroundColor: '#3CB371',
        marginTop: 10,
    },
    
    cardTitleText: {
        color: 'black',
        fontSize: 20,
    },

    cardText: {
        // marginTop: 25,
        color: 'black',
        fontSize: 20,
        textAlign: 'center', 
        alignItems: 'center'
    },
})

export default styles;
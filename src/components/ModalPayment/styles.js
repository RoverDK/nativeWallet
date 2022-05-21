import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    header: {
        borderBottomWidth: 1,
        color: 'black',
        paddingBottom: 5
    },
    title: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    inputs: {
        marginBottom: 10,
        width: '80%',
        marginLeft: '10%'
    },
    input: {
        borderBottomWidth: 1,
        color: 'black'
    },
    buttons:{
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        marginHorizontal: '5%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    backButton: {
        width: '90%'
    }
});
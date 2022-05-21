import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    header: {
        padding: 10,
        borderBottomWidth: 2
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        textAlign: 'center'
    },
    inputs: {
        width: '60%',
        marginLeft: '20%',
        marginVertical: 10,
        flex: 1,
        marginTop: 100
    },
    input: {
        borderBottomWidth: 1,
        color: 'black'
    },
    button: {
        width: '70%',
        marginLeft: '15%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    }
});
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    wallet: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 12,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    },
    money: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    },
    button: {
        width: '60%',
        marginLeft: '20%',
        borderRadius: 10,
        overflow: 'hidden'
    }
});
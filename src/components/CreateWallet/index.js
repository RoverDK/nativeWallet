import React, {useState} from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import { useDispatch } from 'react-redux'
import { setObj } from '../../storage'
import {newWallet} from '../../store/walletSlice'

import {styles} from './styles'

export const CreateWallet = ({setCheck}) => {

    const dispatch = useDispatch();

    const [wallet, setWallet] = useState({
        name: '',
        money: 0
    })

    const create = () => {
        dispatch(newWallet(wallet));
        setObj('wallet', wallet);
        setCheck(false);
    }
    
    return <View style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.title}>Create a Wallet</Text>
        </View>
        <View style={styles.inputs}>
            <TextInput
            placeholder='Wallet name...'
            placeholderTextColor='grey'
            onChangeText={text => setWallet({...wallet, name: text})}
            maxLength={20}
            style={styles.input}
            />
            <TextInput
            placeholder='Initial amount...'
            placeholderTextColor='grey'
            onChangeText={text => setWallet({...wallet, money: parseFloat(text)})}
            keyboardType={'number-pad'}
            maxLength={15}
            style={styles.input}
            />
        </View>
        <View style={styles.button}>
            <Button
            title='Create'
            disabled={wallet.money && wallet.name ? false : true}
            onPress={() => create()}
            />
        </View>
    </View>
}
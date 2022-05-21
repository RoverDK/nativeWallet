import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import { useSelector } from 'react-redux'
import { ModalPayment } from '../ModalPayment'

import { styles } from './styles'

export const Wallet = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const wallet = useSelector(state => state.wallet);

    return <View style={styles.wallet}>
        <Text style={styles.title}>{wallet.name}</Text>
        <Text style={styles.money}>{wallet.money} <Text>$</Text></Text>
        <View style={styles.button}>
            <Button
            title='Process'
            onPress={() => setModalVisible(true)}
            />
        </View>
        <ModalPayment modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
}
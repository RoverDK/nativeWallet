import React, {useState} from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import Modal from "react-native-modal";
import { useDispatch, useSelector } from 'react-redux';
import { getObj, mergeObj, setObj } from '../../storage';
import { addItem } from '../../store/transactionSlice';
import { addMoney, takeMoney } from '../../store/walletSlice';
import { styles } from './styles';

export const ModalPayment = ({modalVisible, setModalVisible}) => {

    const dispatch = useDispatch();
    
    const wallet = useSelector(state => state.wallet)

    const [transaction, setTransaction] = useState({
        comment: '',
        money: 0
    })

    const closeModal = () => {
        setTransaction({comment: '', money: 0});
        setModalVisible(false);
    }

    const createTransaction = (type) => {
        const tmp = {comment: transaction.comment, money: type ? transaction.money : transaction.money * -1, key: Date.now()};
        dispatch(type ? addMoney(transaction.money) : takeMoney(transaction.money));
        dispatch(addItem(tmp));
        (async () => {
            let tmpList = await getObj('list');
            tmpList.list.push(tmp);
            await setObj('wallet', {name : wallet.name, money: wallet.money + (type ? transaction.money : transaction.money * -1)});
            await mergeObj('list', {list: tmpList.list});
        })();
        setTransaction({comment: '', money: 0});
        setModalVisible(false);
    }

    return <Modal isVisible={modalVisible}>
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.title}>Transaction info</Text>
            </View>
            <View style={styles.inputs}>
                <TextInput
                placeholder='Comment...'
                placeholderTextColor='grey'
                onChangeText={text => setTransaction({...transaction, comment: text})}
                maxLength={200}
                multiline={true}
                style={styles.input}
                />
                <TextInput
                placeholder='Amount...'
                placeholderTextColor='grey'
                onChangeText={text => setTransaction({...transaction, money: parseFloat(text)})}
                keyboardType='number-pad'
                maxLength={15}
                style={styles.input}
                />
            </View>
            <View style={styles.buttons}>
                { (transaction.comment && transaction.money ? false : true) ?
                    <View style={{...styles.button, ...styles.backButton}}>
                        <Button
                        title='Back'
                        onPress={() => closeModal()}
                        />
                    </View>
                    :
                    <>
                        <View style={styles.button}>
                            <Button
                            title='Income'
                            onPress={() => createTransaction(true)}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                            title='Expance'
                            onPress={() => createTransaction(false)}
                            />
                        </View>
                    </>
                }
            </View>
        </View>
    </Modal>
}
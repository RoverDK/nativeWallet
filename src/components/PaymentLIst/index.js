import React, { useEffect } from 'react'
import {View, Text, ScrollView} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getObj, setObj } from '../../storage';
import { addItem, clearList } from '../../store/transactionSlice';

import { styles } from './styles';

export const PaymentList = () => {

    const list = useSelector(state => state.transaction.list);
    const money = useSelector(state => state.wallet.money)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const tmpList = await getObj('list');
            if(!tmpList){
                setObj('list', {list: [{comment: 'For your start', money: money, key: Date.now()}]});
                dispatch(addItem({comment: 'For your start', money: money, key: Date.now()}));
            }else{
                dispatch(clearList());
                tmpList.list.map(item => {
                    dispatch(addItem(item));
                });
            }            
        })();
    },[] );

    return <ScrollView style={styles.list}>
        {list.map(item =>
            <View style={styles.listItem} key={item.key}>
                <Text style={styles.comment}>{item.comment}</Text>
                <Text style={{...styles.money, color: item.money < 0 ? 'red' : 'green'}}>{item.money} <Text style={{color: 'black'}}>$</Text></Text>
            </View>
        )}
    </ScrollView>
}
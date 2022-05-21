import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {CreateWallet} from '../CreateWallet'
import { getObj } from '../../storage'
import { newWallet } from '../../store/walletSlice';
import { Wallet } from '../Wallet';
import { PaymentList } from '../PaymentLIst';


export const Main = () => {

  const dispatch = useDispatch();

  const [check, setCheck] = useState(true);

  useEffect(() => {
    (async () => {
      const value = await getObj('wallet');
      if(value){
        dispatch(newWallet(value));
        setCheck(false);
      }
    })();
  },[]);

  return (
    <>
      { check ?
        <CreateWallet setCheck={setCheck} />
        :
        <>
          <Wallet />
          <PaymentList/>
        </>
      }
      
    </>
  );
};

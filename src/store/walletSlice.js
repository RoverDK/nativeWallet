import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    money: 0
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        newWallet: (state, action) => {
            state.name = action.payload.name;
            state.money = action.payload.money;
        },
        addMoney: (state, action) => {
            state.money += action.payload;
        },
        takeMoney: (state, action) => {
            state.money -= action.payload;
        },
    }
})

export default walletSlice.reducer;
export const {newWallet, addMoney, takeMoney} = walletSlice.actions;
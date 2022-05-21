import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.list.push(action.payload);
        },
        clearList: state => {
            state.list = [];
        },
    }
})

export default transactionSlice.reducer;
export const {addItem, clearList} = transactionSlice.actions;
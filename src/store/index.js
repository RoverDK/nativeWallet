import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import transactionReducer from "./transactionSlice";

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
        transaction: transactionReducer,
    },
})
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from '../../app/store';

export type QuoteState = {
    data: { quote: string },
    pending: boolean,
    error: boolean
};

const initialState: QuoteState = {
    data: { quote: 'click that button' },
    pending: false,
    error: false
};
export const getQuote = createAsyncThunk('quote/getQuote', async () => {
    const respone = await axios.get('https://api.kanye.rest/');
    return respone.data;
});
export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getQuote.pending, state => {
                state.pending = true;
            })
            .addCase(getQuote.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.data = payload;
            })
            .addCase(getQuote.rejected, state => {
                state.pending = false;
                state.error = true;
            })
    }
});

export const selectQuote = (state: RootState) => state.quote;
export default quoteSlice.reducer;

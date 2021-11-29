import { createReducer } from "@reduxjs/toolkit";
import { getQuote } from "./actions";

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

export const quoteReducer = createReducer(initialState, builder => {
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
});
import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getQuote } from "../features/quote/quoteSlice";
import { selectQuote } from "../features/quote/quoteSlice";

const QuotePage: React.FC = () => {

    const dispatch = useAppDispatch();
    const { data, pending, error } = useAppSelector(selectQuote);

    return (
        <>
            <h1>Generate Random Guote!</h1>
            <div>
                {pending && <p>Loading...</p>}
                {data && <p>{data.quote}</p>}
                {error && <p>Oops, something went wrong</p>}
                
                <button onClick={() => dispatch(getQuote())} disabled={pending}>Generate Quote!</button>
            </div>
        </>
    )
}
export default QuotePage
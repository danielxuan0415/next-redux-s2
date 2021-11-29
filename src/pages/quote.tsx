import React, { useState } from "react"
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getQuote, selectQuote } from "../features/quote";


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
            <div className="">
                <Link href="/"><button>Go Home!</button></Link>
            </div>
        </>
    )
}
export default QuotePage
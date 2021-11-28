import React, { useState } from "react"
import Link
 from "next/link";
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectCount } from "../features/counter/counterSlice";

import { increment, decrement, incrementByAmount }
    from "../features/counter/counterSlice";
const val1: number = 0
const IndexPage = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState<number>(0);

    return (
        <>
            <h1>Welcome to the greatest app in the world!</h1>
            <h2>The current number is {count}</h2>
            <div>
                <input type="text" name="amount" value={incrementAmount} onChange={(e) => setIncrementAmount(Number(e.target.value))} />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}>Increment by Amount</button>
            </div>
            <div>
                <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
                <button onClick={() => dispatch(increment())}>Increment by 1</button>
            </div>
            <Link href="/"><button>Go Home!</button></Link>
        </>
    )
}
export default IndexPage
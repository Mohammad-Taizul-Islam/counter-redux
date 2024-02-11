'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment, decrement, incrementByAmount,
    incrementAsync,
    selectCount,
} from './counterSlice';


const Counter = () => {

    const count = useSelector(selectCount)
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <>
            <div className='flex flex-row items-center justify-evenly '>
                <button className='bg-slate-500 w-[30px]' onClick={() => dispatch(increment())}>+</button>
                <input type="text" value={count} readOnly />
                <button className='bg-slate-500 w-[30px]' onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className='flex flex-row items-center justify-evenly'>
                <button
                    className={`w-[30px]`}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
                <input value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)} />

                <button
                    className={`w-[30px]`}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </>
    )
}

export default Counter
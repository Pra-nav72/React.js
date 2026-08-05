import { useState } from 'react';
import style from './Card.module.css';

function Card(){
    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count+1);
    }
    function Decrement(){
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }
    return(
        <div className={style.card}>
            <div>
                <h2 className='bg-blue-200'>we are using tailwind from now</h2>
                <h1>{count}</h1>
                <button className='bg-green-400 rounded-lg px-[1.5vw] py-[.8vw] m-1.5' onClick={Increment}>Increment</button>
                <button className='bg-blue-400 rounded-lg px-[1.5vw] py-[.8vw] m-1.5' onClick={Decrement}>Decrement</button>
                <button className='bg-red-500 rounded-lg px-[1.5vw] py-[.8vw]' onClick={Reset}>Reset</button>
            </div>
            <p>in tailwind 1 = 4px</p>
        </div>
    )
}

export default Card
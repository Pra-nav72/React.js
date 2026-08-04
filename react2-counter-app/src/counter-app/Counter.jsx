import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        if(count>0) setCount(count-1);
    }

    function reset(){
        setCount(0);
    }

  return (
    <div>
        <h1>Counter</h1>
        counter: {count} <br />
      
        <Button text='Increment' func={increment}/>
        <Button text='Decrement' func={decrement}/>
        <Button text='Reset' func={reset} />
    
    </div>
  )
}

function Button(props){
    return(
        // <button className='buttons' onClick={text}>{text}</button>
        <button className='buttons' onClick={props.func}>{props.text}</button>
    )
}

export default Counter

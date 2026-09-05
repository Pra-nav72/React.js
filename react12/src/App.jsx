import { useRef } from 'react'
import { useState } from 'react'
import MoreUseRef from './MoreUseRef';

function App() {
  const inputRef = useRef();
  const shapeDivRef = useRef();

  const handleInput = ()=>{
    console.log(inputRef.current)
    inputRef.current.style.backgroundColor = 'pink'
    inputRef.current.style.color = 'black'
    inputRef.current.style.borderColor = 'red'
    inputRef.current.style.outline = 'none'
  }

  const handleChangeShape = () =>{
    const x = shapeDivRef.current.style;
    console.log(x.backgroundColor)
    if (x.backgroundColor === 'red') {
      x.backgroundColor = 'lightblue'
      x.borderRadius = '100%'
    }
    else{
      x.backgroundColor = 'red'
      x.borderRadius = '0'
    }
  }

  return (
   <div>
      <h1>This is useRef() tutorial</h1>

      <div>
        <h2>change input box on button click</h2>
        <input type="text" placeholder='username' ref={inputRef} style={{padding: '4px 4px'}}/>
        <button onClick={handleInput}>focus</button>
      </div>

      <div>
        <h2>change shape of the div on button click</h2>
        <div ref={shapeDivRef} style={{height: "200px", width: '200px', backgroundColor: 'red', margin: '5px'}}></div>
        <button onClick={handleChangeShape}>change shape</button>
      </div>

      <br />
      <div style={{backgroundColor: 'cyan', padding: '12px'}}>
        <MoreUseRef />
      </div>
   </div>
  )
}

export default App
